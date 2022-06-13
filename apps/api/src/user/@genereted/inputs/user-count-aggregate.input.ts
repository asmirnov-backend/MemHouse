import { Field, InputType, HideField } from '@nestjs/graphql';

@InputType()
export class UserCountAggregateInput {
  @HideField()
  id?: true;

  @Field(() => Boolean, { nullable: true })
  email?: true;

  @Field(() => Boolean, { nullable: true })
  password?: true;

  @Field(() => Boolean, { nullable: true })
  nickname?: true;

  @HideField()
  money?: true;

  @Field(() => Boolean, { nullable: true })
  _all?: true;
}
