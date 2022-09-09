import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Profile {
  id: string;
  name: string;
  surname: string;
  birthday: Date | null;
}
