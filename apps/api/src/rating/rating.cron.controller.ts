import { RatingService } from './rating.service';

import { Controller } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller()
export class RatingCronController {
  constructor(private readonly ratingService: RatingService) {}

  @Cron(CronExpression.EVERY_10_MINUTES)
  async recountAllRatings() {
    await this.ratingService.recountAllRatings();
  }
}
