import { seedMems } from './mems';

import { ImageMeta } from '@prisma/client';

/* eslint-disable sonarjs/no-duplicate-string */
export const seedImagesMeta: ImageMeta[] = [
  {
    id: 'Bs1BDcL',
    title: '8dfcb3b24da8',
    displayUrl: 'https://i.ibb.co/NY4Khtx/8dfcb3b24da8.jpg',
    width: 400,
    height: 239,
    size: 31132,
    originMeta: {
      id: 'Bs1BDcL',
      title: '8dfcb3b24da8',
      url_viewer: 'https://ibb.co/Bs1BDcL',
      url: 'https://i.ibb.co/NY4Khtx/8dfcb3b24da8.jpg',
      display_url: 'https://i.ibb.co/NY4Khtx/8dfcb3b24da8.jpg',
      width: '400',
      height: '239',
      size: 31132,
      time: '1670657694',
      expiration: '0',
      image: {
        filename: '8dfcb3b24da8.jpg',
        name: '8dfcb3b24da8',
        mime: 'image/jpeg',
        extension: 'jpg',
        url: 'https://i.ibb.co/NY4Khtx/8dfcb3b24da8.jpg',
      },
      thumb: {
        filename: '8dfcb3b24da8.jpg',
        name: '8dfcb3b24da8',
        mime: 'image/jpeg',
        extension: 'jpg',
        url: 'https://i.ibb.co/Bs1BDcL/8dfcb3b24da8.jpg',
      },
      delete_url: 'https://ibb.co/Bs1BDcL/f6ae72eb3d870af2602d5be97a0543d2',
    },
    memId: seedMems[0].id,
  },
];
