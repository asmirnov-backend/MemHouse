import { Injectable } from '@nestjs/common';

/**
 * Rating is in interval (-100, 100)
 */
@Injectable()
export class MemRatingService {
  private readonly INITIAL_ABSOLUT_RATING = 1000;

  calculate(mem = { likes: 0, dislikes: 0 }) {
    const ratingAbsolut =
      this.INITIAL_ABSOLUT_RATING + mem.likes - mem.dislikes * 3;

    return this.convertNumberToInterval(ratingAbsolut);
  }

  private convertNumberToInterval(value: number) {
    const TO_INTERVAL_FROM_MINUS_100_TO_100 = (2 / Math.PI) * 100;

    return Math.atan(value / 10000) * TO_INTERVAL_FROM_MINUS_100_TO_100;
  }
}
