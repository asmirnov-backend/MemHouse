import { MemAvgOrderByAggregateInput } from './mem-avg-order-by-aggregate.input';
import { MemCountOrderByAggregateInput } from './mem-count-order-by-aggregate.input';
import { MemMaxOrderByAggregateInput } from './mem-max-order-by-aggregate.input';
import { MemMinOrderByAggregateInput } from './mem-min-order-by-aggregate.input';
import { MemSumOrderByAggregateInput } from './mem-sum-order-by-aggregate.input';

import { SortOrder } from '../../../prisma/@genereted/enums/sort-order.enum';

import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class MemOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  imgUrls?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  text?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  tags?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  likes?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  dislikes?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  rating?: keyof typeof SortOrder;

  @Field(() => MemCountOrderByAggregateInput, { nullable: true })
  _count?: MemCountOrderByAggregateInput;

  @Field(() => MemAvgOrderByAggregateInput, { nullable: true })
  _avg?: MemAvgOrderByAggregateInput;

  @Field(() => MemMaxOrderByAggregateInput, { nullable: true })
  _max?: MemMaxOrderByAggregateInput;

  @Field(() => MemMinOrderByAggregateInput, { nullable: true })
  _min?: MemMinOrderByAggregateInput;

  @Field(() => MemSumOrderByAggregateInput, { nullable: true })
  _sum?: MemSumOrderByAggregateInput;
}
