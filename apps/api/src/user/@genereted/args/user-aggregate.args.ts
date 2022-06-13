import { UserAvgAggregateInput } from '../inputs/user-avg-aggregate.input';
import { UserCountAggregateInput } from '../inputs/user-count-aggregate.input';
import { UserMaxAggregateInput } from '../inputs/user-max-aggregate.input';
import { UserMinAggregateInput } from '../inputs/user-min-aggregate.input';
import { UserOrderByWithRelationInput } from '../inputs/user-order-by-with-relation.input';
import { UserSumAggregateInput } from '../inputs/user-sum-aggregate.input';
import { UserWhereUniqueInput } from '../inputs/user-where-unique.input';
import { UserWhereInput } from '../inputs/user-where.input';

import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@ArgsType()
export class UserAggregateArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;

  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithRelationInput>;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: UserWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => UserCountAggregateInput, { nullable: true })
  _count?: UserCountAggregateInput;

  @Field(() => UserAvgAggregateInput, { nullable: true })
  _avg?: UserAvgAggregateInput;

  @Field(() => UserSumAggregateInput, { nullable: true })
  _sum?: UserSumAggregateInput;

  @Field(() => UserMinAggregateInput, { nullable: true })
  _min?: UserMinAggregateInput;

  @Field(() => UserMaxAggregateInput, { nullable: true })
  _max?: UserMaxAggregateInput;
}
