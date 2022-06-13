import { Field, ObjectType, Int, HideField } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  email!: number;

  @HideField()
  password!: number;

  @Field(() => Int, { nullable: false })
  nickname!: number;

  @Field(() => Int, { nullable: false })
  money!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
