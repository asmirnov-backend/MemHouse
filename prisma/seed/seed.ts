import { seedImagesMeta } from './imagesMeta';
import { seedMemReactions } from './memReaction';
import { seedMems } from './mems';
import { seedRatings } from './rating';
import { seedTags } from './tags';
import { seedUsers } from './users';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  // First of all delete previous seed
  await prisma.imageMeta.deleteMany({
    where: { id: { in: seedImagesMeta.map(e => e.id) } },
  });
  await prisma.rating.deleteMany({
    where: { OR: seedRatings },
  });
  await prisma.mem.deleteMany({
    where: { id: { in: seedMems.map(e => e.id) } },
  });
  await prisma.user.deleteMany({
    where: { id: { in: seedUsers.map(e => e.id) } },
  });
  await prisma.memReaction.deleteMany({
    where: { OR: seedMemReactions },
  });
  await prisma.tag.deleteMany({ where: { OR: seedTags } });

  // Create seed
  await prisma.user.createMany({
    data: seedUsers,
  });
  await prisma.mem.createMany({
    data: seedMems,
  });
  await prisma.memReaction.createMany({
    data: seedMemReactions,
  });
  await prisma.rating.createMany({
    data: seedRatings,
  });
  await prisma.imageMeta.createMany({
    // @ts-ignore Prisma issue: https://github.com/prisma/prisma/issues/9247
    data: seedImagesMeta,
  });
  await prisma.tag.createMany({
    data: seedTags,
  });
  await prisma.mem.update({
    where: { id: seedMems[0].id },
    data: {
      tags: {
        set: [
          { id: seedTags[0].id },
          { id: seedTags[1].id },
          { id: seedTags[2].id },
          { id: seedTags[3].id },
        ],
      },
    },
  });
};

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
