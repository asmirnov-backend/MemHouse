import { RatingCountService } from './rating-count.service';

describe('RatingCountService', () => {
  const service = new RatingCountService();

  it('Service should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Initial rating', async () => {
    const initialRating = service.calculate();
    expect(initialRating).toBeCloseTo(6.345);
  });

  it('High rating', () => {
    expect(service.calculate({ likes: 100000, dislikes: 1000 })).toBeCloseTo(
      93.526,
    );
  });

  it('Low rating (negative number)', () => {
    expect(service.calculate({ likes: 1000, dislikes: 1000 })).toBeCloseTo(
      -6.345,
    );
  });
});
