import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MemAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  likes?: true;

  @Field(() => Boolean, { nullable: true })
  dislikes?: true;

  @Field(() => Boolean, { nullable: true })
  rating?: true;
}
