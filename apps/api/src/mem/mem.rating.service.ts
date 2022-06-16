import { Injectable } from '@nestjs/common';

/**
 * Rating is in interval (-100, 100)
 */
@Injectable()
export class MemRatingService {
  private readonly initialAbsolutRating = 1000;

  calcRating(mem = { likes: 0, dislikes: 0 }) {
    const ratingAbsolut =
      this.initialAbsolutRating + mem.likes - mem.dislikes * 3;

    return this.convertNumberBetweenMinus100and100(ratingAbsolut);
  }

  private convertNumberBetweenMinus100and100(value: number) {
    return ((Math.atan(value / 10000) * 2) / Math.PI) * 100;
  }
}
