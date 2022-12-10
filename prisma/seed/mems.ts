import { seedUsers } from './users';

import { Mem } from '@prisma/client';

export const seedMems: Mem[] = [
  {
    id: '19888a7d-ff42-42a5-95e5-1717675725a3',
    text: 'Волк идёт',
    createdUserId: seedUsers[0].id,
  },
  {
    id: '19888a7d-ff42-42a5-95e5-1717675725a2',
    text: null,
    createdUserId: seedUsers[0].id,
  },
  {
    id: '19888a7d-ff42-42a5-95e5-1717675725a1',
    text: null,
    createdUserId: seedUsers[0].id,
  },
  {
    id: '19888a7d-ff42-42a5-95e5-1717675724a1',
    text: null,
    createdUserId: seedUsers[0].id,
  },
  {
    id: '19888a7d-ff42-42a5-95e5-1717675723a1',

    text: null,
    createdUserId: seedUsers[0].id,
  },
  {
    id: '19888a7d-ff42-42a5-95e5-1717675624a1',
    text: null,
    createdUserId: seedUsers[0].id,
  },
  {
    id: '19888a7d-ff42-42a5-95e5-1717675524a1',
    text: null,
    createdUserId: seedUsers[0].id,
  },
  {
    id: '19888a7d-ff42-42a5-95e5-1717675424a1',
    text: null,
    createdUserId: seedUsers[0].id,
  },
  {
    id: '19888a7d-ff42-42a5-95e5-1715675424a1',
    text: null,
    createdUserId: seedUsers[0].id,
  },
  {
    id: '19888a7d-ff42-42a5-95e5-1725675424a1',
    text: null,
    createdUserId: seedUsers[0].id,
  },
  {
    id: '19888a7d-ff42-42a5-95e5-1725175424a1',
    text: null,
    createdUserId: seedUsers[0].id,
  },
  {
    id: '19888a7d-ff42-42a5-95e5-1725175724a1',
    text: null,
    createdUserId: seedUsers[0].id,
  },
  {
    id: '19888a7d-ff42-42a5-95e5-2725175724a1',
    text: `Влaсти Япoнии ищyт чeловека, котoрый нaучит молoдежь бyхать.

    Они объявили кoнкурс — нужнo придyмать cпособы, кoторые cклонят молoдёжь к бoльшему упoтреблению aлкоголя. Всё из-зa cокращения нaлоговых поcтуплений от aлкогольной отрaсли.
    
    Мeчта номeр oдин - брoсить все дeла и улeтеть в Япoнию пoднимать эконoмику.`,
    createdUserId: seedUsers[0].id,
  },
  {
    id: '19888a7d-ff42-42a5-95e5-3725175724a1',
    text: null,
    createdUserId: seedUsers[0].id,
  },
  {
    id: '19888a7d-ff42-42a5-95e5-4725175724a1',
    text: null,
    createdUserId: seedUsers[0].id,
  },
];
