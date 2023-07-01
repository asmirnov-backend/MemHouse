import { RatingCronController } from './rating.cron.controller';
import { RatingService } from './rating.service';
import { RatingCountService } from './ratingCount.service';

import { MemModule } from '../mem/mem.module';
import { PrismaModule } from '../prisma/prisma.module';

import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [PrismaModule, MemModule, ScheduleModule.forRoot()],
  providers: [RatingCountService, RatingService],
  controllers: [RatingCronController],
})
export class RatingModule {}
