import { Field, InputType, HideField } from '@nestjs/graphql';

@InputType()
export class MemAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  likes?: true;

  @Field(() => Boolean, { nullable: true })
  dislikes?: true;

  @HideField()
  rating?: true;
}
