import { ReactionAbstractService } from './reaction.abstract.service';

import { PrismaService } from '../prisma/prisma.service';

import { Injectable } from '@nestjs/common';
import { MemReactionType } from '@prisma/client';

@Injectable()
export class LikeReactionService extends ReactionAbstractService {
  protected readonly memReactionType = MemReactionType.LIKE;

  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
