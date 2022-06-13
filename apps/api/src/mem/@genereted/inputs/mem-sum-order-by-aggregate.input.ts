import { SortOrder } from '../../../prisma/@genereted/enums/sort-order.enum';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MemSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  likes?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  dislikes?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  rating?: keyof typeof SortOrder;
}
