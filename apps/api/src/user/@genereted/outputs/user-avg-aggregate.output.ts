import { Field, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
export class UserAvgAggregate {
  @Field(() => Float, { nullable: true })
  money?: number;
}
