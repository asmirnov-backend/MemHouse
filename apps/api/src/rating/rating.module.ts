import { RatingCronService } from './rating.cron.service';
import { RatingService } from './rating.service';
import { RatingCountService } from './ratingCount.service';

import { MemModule } from '../mem/mem.module';

import { PrismaModule } from '@api/prisma/prisma.module';

import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [PrismaModule, MemModule, ScheduleModule.forRoot()],
  providers: [RatingCountService, RatingCronService, RatingService],
})
export class RatingModule {}
