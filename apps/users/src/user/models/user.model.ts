import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '@prisma/client';

@ObjectType()
@Directive('@key(fields: "id")')
export class UserModel implements Omit<User, 'password'> {
  @Field(() => ID)
  id: string;
  email: string;
  nickname: string;
  name: string;
  surname: string;
  birthday: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
