import { seedUsers } from './users';

import { Mem } from '@prisma/client';

export const seedMems: Mem[] = [
  {
    id: '19888a7d-ff42-42a5-95e5-1717675725a3',
    imgUrls: [
      'https://sun9-9.userapi.com/impg/0kyBk6Caf4_12E8n4XX5Ch_yLqcFxkgsrKld_Q/KfEqLhCaUBY.jpg?size=1200x1200&quality=95&sign=b846a2d995ddc09990ec22e2614d45b3&type=album',
    ],
    text: null,
    tags: [],
    likes: 10,
    dislikes: 2,
    rating: 22,
    createdUserId: seedUsers[0].id,
  },
];
