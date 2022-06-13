import { Field, ObjectType, ID, HideField, Float } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @HideField()
  password!: string;

  @Field(() => String, { nullable: false })
  nickname!: string;

  @Field(() => Float, { nullable: false, defaultValue: 0 })
  money!: number;
}
