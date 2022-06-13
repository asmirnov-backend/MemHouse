import { UserAvgOrderByAggregateInput } from './user-avg-order-by-aggregate.input';
import { UserCountOrderByAggregateInput } from './user-count-order-by-aggregate.input';
import { UserMaxOrderByAggregateInput } from './user-max-order-by-aggregate.input';
import { UserMinOrderByAggregateInput } from './user-min-order-by-aggregate.input';
import { UserSumOrderByAggregateInput } from './user-sum-order-by-aggregate.input';

import { SortOrder } from '../../../prisma/@genereted/enums/sort-order.enum';

import { HideField, InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserOrderByWithAggregationInput {
  @HideField()
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  nickname?: keyof typeof SortOrder;

  @HideField()
  money?: keyof typeof SortOrder;

  @Field(() => UserCountOrderByAggregateInput, { nullable: true })
  _count?: UserCountOrderByAggregateInput;

  @Field(() => UserAvgOrderByAggregateInput, { nullable: true })
  _avg?: UserAvgOrderByAggregateInput;

  @Field(() => UserMaxOrderByAggregateInput, { nullable: true })
  _max?: UserMaxOrderByAggregateInput;

  @Field(() => UserMinOrderByAggregateInput, { nullable: true })
  _min?: UserMinOrderByAggregateInput;

  @Field(() => UserSumOrderByAggregateInput, { nullable: true })
  _sum?: UserSumOrderByAggregateInput;
}
