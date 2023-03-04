import { seedMems } from './mems';

import { Rating } from '@prisma/client';

export const seedRatings: Rating[] = [
  {
    amount: 11.2,
    memId: seedMems[0].id,
  },
  {
    amount: 19.2,
    memId: seedMems[1].id,
  },
  {
    amount: 10.2,
    memId: seedMems[2].id,
  },
  {
    amount: 5.2,
    memId: seedMems[3].id,
  },
  {
    amount: 10.2,
    memId: seedMems[4].id,
  },
];
