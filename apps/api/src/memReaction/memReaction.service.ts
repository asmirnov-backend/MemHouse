import { PrismaService } from '../prisma/prisma.service';

import { Injectable } from '@nestjs/common';
import { MemReactionType } from '@prisma/client';
import { isNull } from 'lodash';

@Injectable()
export class MemReactionService {
  constructor(private readonly prisma: PrismaService) {}

  async toggleLike(params: { userId: string; memId: string }) {
    const memLikeReactionData = { ...params, type: MemReactionType.LIKE };

    const memLikeReaction = await this.prisma.memReaction.findUnique({
      where: { memId_userId_type: memLikeReactionData },
    });

    if (isNull(memLikeReaction)) {
      await this.prisma.memReaction.create({
        data: memLikeReactionData,
      });
    } else {
      await this.prisma.memReaction.delete({
        where: {
          memId_userId_type: memLikeReactionData,
        },
      });
    }

    const likes = await this.prisma.memReaction.count({
      where: { memId: params.memId, type: MemReactionType.LIKE },
    });

    return { likes };
  }
}
