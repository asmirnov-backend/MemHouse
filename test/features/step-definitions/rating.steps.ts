import { RatingCountService } from '../../../apps/api/src/mem/rating/rating-count.service';

import { assert } from 'chai';
import { binding, given, then, when } from 'cucumber-tsflow';

@binding()
export class RatingSteps {
  private readonly service = new RatingCountService();
  private mem: any = {};

  @given(/Мем/)
  givenMem(dataTable: { rawTable: [['лайки', string], ['дизлайки', string]] }) {
    console.log((dataTable as any).rowsHash());
    this.mem.likes = Number(dataTable.rawTable[0][1]);
    this.mem.dislikes = Number(dataTable.rawTable[1][1]);
  }

  @then(/Рейтинг равен ([0-9,.]*)/)
  accountBalanceShouldEqual(rating: string) {
    assert.closeTo(
      this.service.calculate({
        likes: this.mem.likes,
        dislikes: this.mem.dislikes,
      }),
      Number(rating),
      0.001,
    );
  }
}
