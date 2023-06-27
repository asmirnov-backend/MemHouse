import { DislikeReactionService } from './dislikeReaction.service';
import { LikeReactionService } from './likeReaction.service';
import { MemReactionResolver } from './memReaction.resolver';

import { JwtRegisteredModule } from '../../../../libs/common/src/modules/jwtRegistered/jwtRegistered.module';
import { PrismaModule } from '../prisma/prisma.module';

import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule, JwtRegisteredModule],
  providers: [MemReactionResolver, LikeReactionService, DislikeReactionService],
  exports: [LikeReactionService, DislikeReactionService],
})
export class MemReactionModule {}
