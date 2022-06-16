import { MemCreateInput } from './dto/input/mem-create.input';
import { MemUpdateInput } from './dto/input/mem-update.input';
import { MemsGetBestInput } from './dto/input/mems-get-best.input';
import { Mem } from './dto/mem.model';
import { MemNotFoundException } from './exceptions/mem-not-found.exception';
import { MemRatingService } from './mem.rating.service';

import { PrismaService } from '@api/prisma/prisma.service';

import { Injectable } from '@nestjs/common';
import { isNull } from 'lodash';

@Injectable()
export class MemService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ratingService: MemRatingService,
  ) {}

  async getBestMems(params: MemsGetBestInput): Promise<Mem[]> {
    return this.prisma.mem.findMany({
      orderBy: { rating: 'desc' },
      take: params.take,
      skip: params.skip,
    });
  }

  async createMem(params: MemCreateInput): Promise<Mem> {
    return this.prisma.mem.create({
      data: {
        imgUrls: params.imgUrls,
        text: params.text ?? null,
        tags: params.tags,
        rating: this.ratingService.calcRating(),
      },
    });
  }

  async updateMem(params: MemUpdateInput): Promise<Mem> {
    const mem = await this.prisma.mem.findUnique({ where: { id: params.id } });

    if (isNull(mem)) {
      throw new MemNotFoundException(params.id);
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
        rating: this.ratingService.calcRating({ likes, dislikes }),
      },
    });
  }
}
