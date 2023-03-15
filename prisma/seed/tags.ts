import { Tag } from '@prisma/client';

import { randomUUID } from 'crypto';

export const seedTags: Tag[] = [
  {
    id: randomUUID(),
    value: 'ржака',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: randomUUID(),
    value: 'програмирование',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: randomUUID(),
    value: 'крутой банан',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: randomUUID(),
    value: 'полный трэш',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
