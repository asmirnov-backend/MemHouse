import { MemMetadataService } from './mem.metadata.service';
import { MemResolver } from './mem.resolver';
import { MemService } from './mem.service';

import { JwtRegisteredModule } from '../../../../libs/common/src/modules/jwtRegistered/jwtRegistered.module';
import { MemReactionModule } from '../memReaction/memReaction.module';
import { PrismaModule } from '../prisma/prisma.module';
import { StoreModule } from '../store/store.module';

import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule, JwtRegisteredModule, StoreModule, MemReactionModule],
  providers: [MemService, MemResolver, MemMetadataService],
  exports: [MemMetadataService, MemService],
})
export class MemModule {}
