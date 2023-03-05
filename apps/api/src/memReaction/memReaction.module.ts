import { MemReactionResolver } from './memReaction.resolver';
import { MemReactionService } from './memReaction.service';

import { JwtRegisteredModule } from '../auth/jwt/jwtRegistered.module';
import { PrismaModule } from '../prisma/prisma.module';

import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule, JwtRegisteredModule],
  providers: [MemReactionResolver, MemReactionService],
  exports: [MemReactionService],
})
export class MemReactionModule {}
