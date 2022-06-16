import { MemRatingService } from './mem.rating.service';
import { MemResolver } from './mem.resolver';
import { MemService } from './mem.service';

import { PrismaModule } from '@api/prisma/prisma.module';

import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [MemService, MemResolver, MemRatingService],
})
export class MemModule {}
