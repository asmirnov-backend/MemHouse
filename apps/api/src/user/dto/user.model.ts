import { Mem } from '../../mem/dto/mem.model';

import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  id: string;
  email: string;
  nickname: string;
  viewedMemes: Mem[];
  createdMems: Mem[];
}
