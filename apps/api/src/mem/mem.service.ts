import { MemCreateInput } from './dto/input/mem-create.input';
import { MemUpdateInput } from './dto/input/mem-update.input';
import { MemsGetBestInput } from './dto/input/mems-get-best.input';
import { Mem } from './dto/mem.model';

import { PrismaService } from '@api/prisma/prisma.service';

import { Injectable } from '@nestjs/common';

@Injectable()
export class MemService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly DEFAULT_TAKE_MEMS = 10;

  async getBestMems(params: MemsGetBestInput): Promise<Mem[]> {
    return this.prisma.mem.findMany({
      orderBy: { rating: 'desc' },
      take: params.take || this.DEFAULT_TAKE_MEMS,
      skip: params.skip,
    });
  }

  async createMem(params: MemCreateInput): Promise<Mem> {
    return this.prisma.mem.create({
      data: {
        imgUrls: params.imgUrls,
        text: params.text ?? null,
        tags: params.tags,
        rating: 1.0, // ratingService.getInitialMemRating()
      },
    });
  }

  async updateMem(params: MemUpdateInput): Promise<Mem> {
    return this.prisma.mem.update({
      where: { id: params.id },
      data: { imgUrls: params.imgUrls, text: params.text, tags: params.tags },
    });
  }
}
