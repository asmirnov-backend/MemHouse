import { Field, InputType, HideField } from '@nestjs/graphql';

@InputType()
export class MemSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  likes?: true;

  @Field(() => Boolean, { nullable: true })
  dislikes?: true;

  @HideField()
  rating?: true;
}
