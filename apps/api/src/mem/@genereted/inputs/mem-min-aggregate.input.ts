import { Field, InputType, HideField } from '@nestjs/graphql';

@InputType()
export class MemMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  text?: true;

  @Field(() => Boolean, { nullable: true })
  likes?: true;

  @Field(() => Boolean, { nullable: true })
  dislikes?: true;

  @HideField()
  rating?: true;
}
