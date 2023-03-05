import { PrismaService } from '../prisma/prisma.service';

import { Injectable } from '@nestjs/common';
import { MemReactionType } from '@prisma/client';
import { isNull } from 'lodash';

@Injectable()
export class MemReactionService {
  constructor(private readonly prisma: PrismaService) {}

  async toggleLike(params: { userId: string; memId: string }) {
    const memLikeReactionData = { ...params, type: MemReactionType.LIKE };

    if (await this.isUserHasSetLike(params)) {
      await this.prisma.memReaction.delete({
        where: {
          memId_userId_type: memLikeReactionData,
        },
      });
    } else {
      await this.prisma.memReaction.create({
        data: memLikeReactionData,
      });
    }

    const likes = await this.prisma.memReaction.count({
      where: { memId: params.memId, type: MemReactionType.LIKE },
    });

    return { likes };
  }

  async isUserHasSetLike(params: {
    memId: string;
    userId: string;
  }): Promise<boolean> {
    const memReaction = await this.prisma.memReaction.findUnique({
      where: { memId_userId_type: { ...params, type: MemReactionType.LIKE } },
    });

    return Boolean(memReaction);
  }
}
