import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProfileDto {
  id: string;
  name: string;
  surname: string;
  birthday: Date | null;
}
