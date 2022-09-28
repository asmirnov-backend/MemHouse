import { MemCreateInput } from './dto/input/mem-create.input';
import { MemUpdateInput } from './dto/input/mem-update.input';
import { GetMemsInput } from './dto/input/mems-get-best.input';
import { Mem } from './dto/mem.model';
import { MemNotFoundException } from './exceptions/mem-not-found.exception';
import { NotMemCreatorException } from './exceptions/not-mem-creator.exception copy';
import { MemMetadataService } from './mem.metadata.service';
import { RatingCountService } from './rating/rating-count.service';

import { PrismaService } from '@api/prisma/prisma.service';

import { Injectable } from '@nestjs/common';
import { isNull } from 'lodash';

@Injectable()
export class MemService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly metadataService: MemMetadataService,
    private readonly ratingCountService: RatingCountService,
  ) {}

  async getBestMems(params: GetMemsInput & { userId: string }): Promise<Mem[]> {
    const mems = await this.prisma.mem.findMany({
      take: params.take,
      skip: params.skip,
      where: { NOT: [{ viewedUsers: { some: { id: params.userId } } }] },
      orderBy: { rating: { amount: 'desc' } },
    });

    await Promise.all(
      mems.map((mem) =>
        this.prisma.mem.update({
          where: { id: mem.id },
          data: { viewedUsers: { connect: { id: params.userId } } },
        }),
      ),
    );

    return mems;
  }

  async getMems(params: GetMemsInput): Promise<Mem[]> {
    return this.prisma.mem.findMany({
      take: params.take,
      skip: params.skip,
      orderBy: { rating: { amount: 'desc' } },
    });
  }

  async createMem(params: MemCreateInput & { userId: string }): Promise<Mem> {
    return this.prisma.mem.create({
      data: {
        imgUrls: params.imgUrls,
        text: params.text ?? null,
        tags: params.tags,
        createdUser: { connect: { id: params.userId } },
        rating: { create: { amount: this.ratingCountService.calculate() } },
      },
    });
  }

  async updateMem(params: MemUpdateInput & { userId: string }): Promise<Mem> {
    const mem = await this.prisma.mem.findUnique({
      where: { id: params.id },
    });

    if (isNull(mem)) {
      throw new MemNotFoundException(params.id);
    }

    if (mem.createdUserId !== params.userId) {
      throw new NotMemCreatorException();
    }

    return this.prisma.mem.update({
      where: { id: params.id },
      data: {
        imgUrls: params.imgUrls,
        text: params.text,
        tags: params.tags,
      },
    });
  }
}
