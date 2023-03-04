import { RatingService } from './rating.service';

import { PrismaService } from '../../prisma/prisma.service';

import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class RatingCronService {
  private readonly logger = new Logger(RatingCronService.name);

  constructor(
    private readonly ratingService: RatingService,
    private readonly prisma: PrismaService,
  ) {}

  @Cron(CronExpression.EVERY_10_MINUTES)
  async recountAllRatings() {
    this.logger.verbose('Start recount all ratings');
    // TODO: increase performance and decrease memory usage, when needed (So big mems amount)
    const ratings = await this.prisma.rating.findMany({
      select: { memId: true },
    });

    await Promise.all(
      ratings.map(({ memId }) =>
        this.ratingService.recountRatingForMem({ memId }),
      ),
    );
    this.logger.verbose('Recount all ratings success');
  }
}
