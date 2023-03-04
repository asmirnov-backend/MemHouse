import { seedMems } from './mems';

import { Rating } from '@prisma/client';

export const seedRatings: Rating[] = [
  {
    id: '699f72c6-aad1-45dc-a255-017c73384d74',
    amount: 11.2,
    memId: seedMems[0].id,
  },
  {
    id: '699f72c6-aad1-45dc-a255-017c73384d75',
    amount: 19.2,
    memId: seedMems[1].id,
  },
  {
    id: '699f72c6-aad1-45dc-a255-017c73384d76',
    amount: 10.2,
    memId: seedMems[2].id,
  },
  {
    id: '699f72c6-aad1-45dc-a255-017c73384d77',
    amount: 5.2,
    memId: seedMems[3].id,
  },
  {
    id: '699f72c6-aad1-45dc-a255-017c73384d78',
    amount: 10.2,
    memId: seedMems[4].id,
  },
];
