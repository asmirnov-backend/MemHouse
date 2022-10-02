import { ProfileDto } from './profile.model';

import { MemDto } from '../../mem/dto/mem.model';

import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserDto {
  id: string;
  email: string;
  nickname: string;
  viewedMemes: MemDto[];
  createdMems: MemDto[];
  profile: ProfileDto | null;
}
