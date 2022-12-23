import { User } from '@prisma/client';

export const seedUsers: User[] = [
  {
    id: '2594476d-c89d-4d33-93ff-dc92407ce18f',
    email: 'email@example.com',
    password: '$2b$10$QJVPbrNlebywKZzixnxfT.RIM5I2Cy3N53kEJDcgp.4yUXRs8oUo6', // 123456
    nickname: 'nickname text',
    name: 'Name',
    surname: 'Surname',
    birthday: null,
  },
];
