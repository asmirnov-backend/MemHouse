import { seedMems } from './mems';

import { Rating } from '@prisma/client';

export const seedRatings: Rating[] = [
  {
    amount: 11.2,
    memId: seedMems[0].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    amount: 19.2,
    memId: seedMems[1].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    amount: 10.2,
    memId: seedMems[2].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    amount: 5.2,
    memId: seedMems[3].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    amount: 10.2,
    memId: seedMems[4].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
