import { Field, InputType, HideField } from '@nestjs/graphql';

@InputType()
export class MemCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  imgUrls?: true;

  @Field(() => Boolean, { nullable: true })
  text?: true;

  @Field(() => Boolean, { nullable: true })
  tags?: true;

  @Field(() => Boolean, { nullable: true })
  likes?: true;

  @Field(() => Boolean, { nullable: true })
  dislikes?: true;

  @HideField()
  rating?: true;

  @Field(() => Boolean, { nullable: true })
  _all?: true;
}
