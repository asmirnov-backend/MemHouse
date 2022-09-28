import { RatingCountService } from './rating-count.service';
import { RatingCronService } from './rating.cron.service';
import { RatingService } from './rating.service';

import { MemMetadataService } from '../mem.metadata.service';

import { PrismaModule } from '@api/prisma/prisma.module';

import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [PrismaModule, ScheduleModule.forRoot()],
  providers: [
    MemMetadataService,
    RatingCountService,
    RatingCronService,
    RatingService,
  ],
  exports: [RatingCountService],
})
export class RatingModule {}
