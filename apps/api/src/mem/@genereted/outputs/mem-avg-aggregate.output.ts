import { Field, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
export class MemAvgAggregate {
  @Field(() => Float, { nullable: true })
  likes?: number;

  @Field(() => Float, { nullable: true })
  dislikes?: number;

  @Field(() => Float, { nullable: true })
  rating?: number;
}
