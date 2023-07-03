import { RatingCountService } from './ratingCount.service';

import { PrismaService } from '../../../../../libs/common/src/modules/prisma/prisma.service';
import { MemMetadataService } from '../mem/mem.metadata.service';
import { MemService } from '../mem/mem.service';

import { Injectable, Logger } from '@nestjs/common';
import { chunk } from 'lodash';

@Injectable()
export class RatingService {
  private readonly logger = new Logger(RatingService.name);

  constructor(
    private readonly memService: MemService,
    private readonly metadataService: MemMetadataService,
    private readonly ratingService: RatingCountService,
    private readonly prisma: PrismaService,
  ) {}

  async recountRatingForMem(params: { memId: string }) {
    const [likes, dislikes] = await Promise.all([
      this.metadataService.getLikesAmount(params.memId),
      this.metadataService.getDislikesAmount(params.memId),
    ]);

    const ratingAmount = this.ratingService.calculate({ likes, dislikes });

    await this.prisma.rating.upsert({
      where: { memId: params.memId },
      create: { amount: ratingAmount, memId: params.memId },
      update: { amount: ratingAmount },
    });
  }

  async recountAllRatings() {
    this.logger.verbose('Start recount all ratings');
    // TODO: increase performance and decrease memory usage, when needed (So big mems amount)
    const memIds = await this.memService.getAllMemsIds();

    for (const chunkMemIds of chunk(memIds, 1000)) {
      await Promise.all(
        chunkMemIds.map(({ id }) => this.recountRatingForMem({ memId: id })),
      );
    }

    this.logger.verbose('Recount all ratings success');
  }
}
