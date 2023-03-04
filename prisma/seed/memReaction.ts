import { seedMems } from './mems';
import { seedUsers } from './users';

import { MemReaction, MemReactionType } from '@prisma/client';

export const seedMemReactions: MemReaction[] = [
  {
    id: '98765a7d-ff42-42a5-95e5-1725175724a1',
    memId: seedMems[0].id,
    type: MemReactionType.LIKE,
    userId: seedUsers[0].id,
  },
  {
    id: '98265a7d-ff42-42a5-95e5-1725175724a1',
    memId: seedMems[0].id,
    type: MemReactionType.LIKE,
    userId: seedUsers[1].id,
  },
  {
    id: '98565a7d-ff42-42a5-95e5-1725175724a1',
    memId: seedMems[1].id,
    type: MemReactionType.DISLIKE,
    userId: seedUsers[1].id,
  },
];
