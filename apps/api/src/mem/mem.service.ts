import { MemCreateInput } from './dto/input/mem-create.input';
import { MemUpdateInput } from './dto/input/mem-update.input';
import { MemsGetBestInput } from './dto/input/mems-get-best.input';
import { Mem } from './dto/mem.model';
import { MemNotFoundException } from './exceptions/mem-not-found.exception';
import { MemRatingService } from './mem.rating.service';

import { PrismaService } from '@api/prisma/prisma.service';

import { ForbiddenException, Injectable } from '@nestjs/common';
import { isNull } from 'lodash';

@Injectable()
export class MemService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ratingService: MemRatingService,
  ) {}

  async getBestMems(
    params: MemsGetBestInput & { userId: string },
  ): Promise<Mem[]> {
    const mems = await this.prisma.mem.findMany({
      orderBy: { rating: 'desc' },
      take: params.take,
      skip: params.skip,
      where: { NOT: [{ viewedUsers: { some: { id: params.userId } } }] },
    });

    for (const mem of mems) {
      await this.prisma.mem.update({
        where: { id: mem.id },
        data: { viewedUsers: { connect: { id: params.userId } } },
      });
    }

    return mems;
  }

  async createMem(params: MemCreateInput & { userId: string }): Promise<Mem> {
    return this.prisma.mem.create({
      data: {
        imgUrls: params.imgUrls,
        text: params.text ?? null,
        tags: params.tags,
        rating: this.ratingService.calculate(),
        createdUserId: params.userId,
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
      throw new ForbiddenException('You are not the creater of this mem');
    }

    const likes = mem.likes + (params.addLikes ? params.addLikes : 0);
    const dislikes =
      mem.dislikes + (params.addDislikes ? params.addDislikes : 0);

    return this.prisma.mem.update({
      where: { id: params.id },
      data: {
        imgUrls: params.imgUrls,
        text: params.text,
        tags: params.tags,
        likes,
        dislikes,
        rating: this.ratingService.calculate({ likes, dislikes }),
      },
    });
  }
}
