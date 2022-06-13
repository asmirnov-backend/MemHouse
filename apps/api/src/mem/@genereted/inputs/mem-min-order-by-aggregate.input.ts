import { SortOrder } from '../../../prisma/@genereted/enums/sort-order.enum';

import { Field, InputType, HideField } from '@nestjs/graphql';

@InputType()
export class MemMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  text?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  likes?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  dislikes?: keyof typeof SortOrder;

  @HideField()
  rating?: keyof typeof SortOrder;
}
