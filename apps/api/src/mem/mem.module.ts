import { MemMetadataService } from './mem.metadata.service';
import { MemResolver } from './mem.resolver';
import { MemService } from './mem.service';

import { JwtRegisteredModule } from '../auth/jwt/jwtRegistered.module';
import { MemReactionModule } from '../memReaction/memReaction.module';
import { StoreModule } from '../store/store.module';

import { PrismaModule } from '@api/prisma/prisma.module';

import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule, JwtRegisteredModule, StoreModule, MemReactionModule],
  providers: [MemService, MemResolver, MemMetadataService],
  exports: [MemMetadataService, MemService],
})
export class MemModule {}
