import { RatingCountService } from './ratingCount.service';

import { MemMetadataService } from '../mem/mem.metadata.service';
import { PrismaService } from '../prisma/prisma.service';

import { Injectable } from '@nestjs/common';

@Injectable()
export class RatingService {
  constructor(
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

    await this.prisma.rating.update({
      where: { memId: params.memId },
      data: { amount: ratingAmount },
    });
  }
}
