import { Field, ObjectType, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  email: string;

  nickname: string;

  @Field(() => Float, { defaultValue: 0 })
  money: number;
}
