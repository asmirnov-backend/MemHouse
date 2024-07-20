import { Injectable } from '@nestjs/common';

/**
 * Rating must be limited (Not be infinity) so it must be in interval (-100, 100)
 */
@Injectable()
export class RatingCountService {
  
  calculate(
    input: { likes: number; dislikes: number } = { likes: 0, dislikes: 0 },
  ) {
    const INITIAL_ABSOLUT_RATING = 1000;
    const ratingAbsolut =
      INITIAL_ABSOLUT_RATING + input.likes - input.dislikes * 3;

    return this.convertUnlimitedNumberToInterval(ratingAbsolut);
  }

  /**
   * Use arctg() function to covert any number to limited interval
   * @chart https://en.wikipedia.org/wiki/Inverse_trigonometric_functions#/media/File:Arctangent_Arccotangent.svg
   * @const SMOOTHING_VALUE to make the rating more spread out, otherwise just 100 likes would make the rating equals to 95 which is too much
   */
  private convertUnlimitedNumberToInterval(value: number) {
    const TO_INTERVAL_FROM_MINUS_100_TO_100 = (2 / Math.PI) * 100;
    const SMOOTHING_VALUE = 10000;

    return (
      Math.atan(value / SMOOTHING_VALUE) * TO_INTERVAL_FROM_MINUS_100_TO_100
    );
  }
}
