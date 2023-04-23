import { PrismaService } from '../prisma/prisma.service';

import { MemReactionType } from '@prisma/client';

export abstract class ReactionAbstractService {
  protected abstract readonly memReactionType: MemReactionType;

  constructor(protected readonly prisma: PrismaService) {}

  async toggle(params: { userId: string; memId: string }) {
    const memReactionData = { ...params, type: this.memReactionType };

    if (await this.isUserHasSetReaction(params)) {
      await this.prisma.memReaction.delete({
        where: {
          memId_userId_type: memReactionData,
        },
      });
    } else {
      await this.prisma.memReaction.create({
        data: memReactionData,
      });
    }

    const reactionAmount = await this.prisma.memReaction.count({
      where: { memId: params.memId, type: this.memReactionType },
    });

    return { reactionAmount };
  }

  async isUserHasSetReaction(params: {
    memId: string;
    userId: string;
  }): Promise<boolean> {
    const memReaction = await this.prisma.memReaction.findUnique({
      where: { memId_userId_type: { ...params, type: this.memReactionType } },
    });

    return Boolean(memReaction);
  }
}
