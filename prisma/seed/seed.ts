import { seedMems } from './mems';
import { seedUsers } from './users';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  // First of all delete previous seed
  await prisma.mem.deleteMany({
    where: { id: { in: seedMems.map((mem) => mem.id) } },
  });
  await prisma.user.deleteMany({
    where: { id: { in: seedUsers.map((user) => user.id) } },
  });

  // Create seed
  await prisma.user.createMany({
    data: seedUsers,
  });
  await prisma.mem.createMany({
    data: seedMems,
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
