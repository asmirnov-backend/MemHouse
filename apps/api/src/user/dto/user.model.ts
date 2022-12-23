import { MemDto } from '../../mem/dto/mem.model';

import { ObjectType } from '@nestjs/graphql';
import { User } from '@prisma/client';

@ObjectType()
export class UserDto implements Omit<User, 'password'> {
  id: string;
  email: string;
  nickname: string;
  name: string;
  surname: string;
  birthday: Date | null;

  viewedMemes: MemDto[];
  createdMems: MemDto[];
}
