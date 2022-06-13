import { Field, ObjectType, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class MemSumAggregate {
  @Field(() => Int, { nullable: true })
  likes?: number;

  @Field(() => Int, { nullable: true })
  dislikes?: number;

  @Field(() => Float, { nullable: true })
  rating?: number;
}
