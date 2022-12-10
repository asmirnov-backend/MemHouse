import { MemMetadataService } from './mem.metadata.service';
import { MemResolver } from './mem.resolver';
import { MemService } from './mem.service';
import { RatingModule } from './rating/rating.module';

import { JwtRegisteredModule } from '../auth/jwt/jwt-registered.module';
import { StoreModule } from '../store/store.module';

import { PrismaModule } from '@api/prisma/prisma.module';

import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule, JwtRegisteredModule, RatingModule, StoreModule],
  providers: [MemService, MemResolver, MemMetadataService],
})
export class MemModule {}
