import { UserAvgAggregate } from './user-avg-aggregate.output';
import { UserCountAggregate } from './user-count-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserSumAggregate } from './user-sum-aggregate.output';

import { Field, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
export class UserGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => String, { nullable: false })
  nickname!: string;

  @Field(() => Float, { nullable: false })
  money!: number;

  @Field(() => UserCountAggregate, { nullable: true })
  _count?: UserCountAggregate;

  @Field(() => UserAvgAggregate, { nullable: true })
  _avg?: UserAvgAggregate;

  @Field(() => UserSumAggregate, { nullable: true })
  _sum?: UserSumAggregate;

  @Field(() => UserMinAggregate, { nullable: true })
  _min?: UserMinAggregate;

  @Field(() => UserMaxAggregate, { nullable: true })
  _max?: UserMaxAggregate;
}
