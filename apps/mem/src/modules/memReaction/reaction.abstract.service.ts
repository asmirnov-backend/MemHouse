import { PrismaService } from '../../../../../libs/common/src/modules/prisma/prisma.service';

import { MemReactionType } from '@prisma/client';

export abstract class ReactionAbstractService {
  protected abstract readonly memReactionType: MemReactionType;

  constructor(protected readonly prisma: PrismaService) {}

  async toggle(input: { userId: string; memId: string }) {
    const memReactionData = { ...input, type: this.memReactionType };

    if (await this.isUserHasSetReaction(input)) {
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
      where: { memId: input.memId, type: this.memReactionType },
    });

    return { reactionAmount };
  }

  async isUserHasSetReaction(input: {
    memId: string;
    userId: string;
  }): Promise<boolean> {
    const memReaction = await this.prisma.memReaction.findUnique({
      where: { memId_userId_type: { ...input, type: this.memReactionType } },
    });

    return Boolean(memReaction);
  }
}
