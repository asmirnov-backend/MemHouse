import { User } from '@prisma/client';

export const seedUsers: User[] = [
  {
    id: '2594476d-c89d-4d33-93ff-dc92407ce18f',
    email: 'email@example.com',
    password: '28f1a678',
    nickname: 'nickname text',
    money: 0,
  },
];
