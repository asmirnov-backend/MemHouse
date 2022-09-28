import { RatingService } from './rating.service';

import { PrismaService } from '../../prisma/prisma.service';

import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class RatingCronService {
  constructor(
    private readonly ratingService: RatingService,
    private readonly prisma: PrismaService,
  ) {}

  @Cron(CronExpression.EVERY_10_MINUTES)
  async recountAllRatings() {
    // TODO: increase performance and decrease memory usage, when needed (So big mems amount)
    const ratings = await this.prisma.rating.findMany({
      select: { memId: true },
    });

    await Promise.all(
      ratings.map(({ memId }) =>
        this.ratingService.recountRatingForMem({ memId }),
      ),
    );
  }
}
