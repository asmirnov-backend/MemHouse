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
  {
    id: '19888a7d-ff42-42a5-95e5-1717675725a2',
    imgUrls: [
      'https://sun9-74.userapi.com/impg/Vue0Omn87J3aNU05yhhfBVOPQNMMPfA-xUqUfg/myo8J4x-gbk.jpg?size=830x1176&quality=95&sign=18c0d77651c9ed3b70317e2417507e31&type=album',
    ],
    text: null,
    tags: [],
    likes: 10,
    dislikes: 2,
    rating: 23,
    createdUserId: seedUsers[0].id,
  },
  {
    id: '19888a7d-ff42-42a5-95e5-1717675725a1',
    imgUrls: [
      'https://sun9-56.userapi.com/impg/BuwXnhNAcdoXaOW9NIBm3XipxqJfZ9RidCI2LA/XZiy-3HgUeE.jpg?size=2000x1777&quality=96&sign=d4e21b1b0a37101a53fb9d16f992d099&type=album',
    ],
    text: null,
    tags: [],
    likes: 10,
    dislikes: 2,
    rating: 7,
    createdUserId: seedUsers[0].id,
  },
  {
    id: '19888a7d-ff42-42a5-95e5-1717675724a1',
    imgUrls: [
      'https://sun9-86.userapi.com/impg/r-vm700Z3A-RE4xZDvkukaTAI3dLC1-NTHAwuQ/5kVR6HjNbK0.jpg?size=811x811&quality=96&sign=d4ace6fe99afc3777794df71235081e1&type=album',
    ],
    text: null,
    tags: [],
    likes: 10,
    dislikes: 2,
    rating: 20,
    createdUserId: seedUsers[0].id,
  },
  {
    id: '19888a7d-ff42-42a5-95e5-1717675723a1',
    imgUrls: [
      'https://sun9-82.userapi.com/impg/pBDNNkP5-48OVb1BcqUxQQ8iqZB_aCqzzDyeCQ/BbJwiwHITtY.jpg?size=527x449&quality=96&sign=f1e0d779b35a2869d7b41fe21846e6f6&type=album',
      'https://sun9-88.userapi.com/impg/L3-OOqiq0KBErCfrAnoTMPHMT6GNi07S_tH6cA/ZBeHtQGHqnQ.jpg?size=505x447&quality=96&sign=ad9bdf5b4ba6534763f35e6c4e511b38&type=album',
      'https://sun9-46.userapi.com/impg/E0-S47DWqbLijarRA1pi9zy5K4TupyYx04ZmjQ/w0siyme5g18.jpg?size=512x449&quality=96&sign=ab5af1d5c647bf9b54c667bd62d45925&type=album',
    ],
    text: null,
    tags: [],
    likes: 10,
    dislikes: 2,
    rating: 7,
    createdUserId: seedUsers[0].id,
  },
];
