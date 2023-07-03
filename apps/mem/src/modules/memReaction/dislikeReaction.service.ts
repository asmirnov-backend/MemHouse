import { ReactionAbstractService } from './reaction.abstract.service';

import { PrismaService } from '../../../../../libs/common/src/modules/prisma/prisma.service';

import { Injectable } from '@nestjs/common';
import { MemReactionType } from '@prisma/client';

@Injectable()
export class DislikeReactionService extends ReactionAbstractService {
  protected readonly memReactionType = MemReactionType.DISLIKE;

  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
