import { seedMems } from './mems';
import { seedUsers } from './users';

import { MemReaction, MemReactionType } from '@prisma/client';

export const seedMemReactions: MemReaction[] = [
  {
    memId: seedMems[0].id,
    type: MemReactionType.LIKE,
    userId: seedUsers[0].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    memId: seedMems[0].id,
    type: MemReactionType.LIKE,
    userId: seedUsers[1].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    memId: seedMems[1].id,
    type: MemReactionType.DISLIKE,
    userId: seedUsers[1].id,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
