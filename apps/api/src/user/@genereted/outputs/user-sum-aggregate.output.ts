import { Field, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
export class UserSumAggregate {
  @Field(() => Float, { nullable: true })
  money?: number;
}
