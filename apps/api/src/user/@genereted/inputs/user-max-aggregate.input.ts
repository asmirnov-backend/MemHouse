import { Field, InputType, HideField } from '@nestjs/graphql';

@InputType()
export class UserMaxAggregateInput {
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
}
