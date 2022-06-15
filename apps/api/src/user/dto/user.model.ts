import { Field, ObjectType, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class User {
  id: string;

  email: string;

  nickname: string;

  @Field(() => Float)
  money: number;
}
