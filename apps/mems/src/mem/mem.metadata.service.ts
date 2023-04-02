import { PrismaService } from '../prisma/prisma.service';

import { Injectable } from '@nestjs/common';
import { MemReactionType } from '@prisma/client';

@Injectable()
export class MemMetadataService {
  constructor(private readonly prisma: PrismaService) {}

  getLikesAmount(memId: string) {
    return this.prisma.memReaction.count({
      where: { memId, type: MemReactionType.LIKE },
    });
  }

  getDislikesAmount(memId: string) {
    return this.prisma.memReaction.count({
      where: { memId, type: MemReactionType.DISLIKE },
    });
  }

  async getRatingAmount(memId: string) {
    const rating = await this.prisma.rating.findUnique({
      where: { memId },
      select: { amount: true },
    });

    return rating?.amount ?? null;
  }

  getImages(memId: string) {
    return this.prisma.imageMeta.findMany({
      where: { memId },
    });
  }

  async getTags(memId: string) {
    const tags = await this.prisma.tag.findMany({
      where: { mems: { some: { id: memId } } },
    });

    return tags.map(tag => tag.value);
  }
}
