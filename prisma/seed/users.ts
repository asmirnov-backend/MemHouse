import { User } from '@prisma/client';

export const seedUsers: User[] = [
  {
    id: '1594476d-c89d-4d33-93ff-dc92407ce18f',
    email: 'email@example.com',
    password: '$2b$10$QJVPbrNlebywKZzixnxfT.RIM5I2Cy3N53kEJDcgp.4yUXRs8oUo6', // 123456
    nickname: 'nickname text',
    name: 'Name',
    surname: 'Surname',
    birthday: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2594476d-c89d-4d33-93ff-dc92407ce18f',
    email: 'email2@example.com',
    password: '$2b$10$QJVPbrNlebywKZzixnxfT.RIM5I2Cy3N53kEJDcgp.4yUXRs8oUo6', // 123456
    nickname: 'nickname 2',
    name: 'Антон',
    surname: 'Крючков',
    birthday: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
