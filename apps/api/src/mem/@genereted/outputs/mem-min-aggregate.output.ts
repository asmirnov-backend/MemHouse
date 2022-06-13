import { Field, ObjectType, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class MemMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  text?: string;

  @Field(() => Int, { nullable: true })
  likes?: number;

  @Field(() => Int, { nullable: true })
  dislikes?: number;

  @Field(() => Float, { nullable: true })
  rating?: number;
}
