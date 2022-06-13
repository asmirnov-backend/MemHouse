import { SortOrder } from '../../../prisma/@genereted/enums/sort-order.enum';

import { Field, InputType, HideField } from '@nestjs/graphql';

@InputType()
export class UserSumOrderByAggregateInput {
  @HideField()
  money?: keyof typeof SortOrder;
}
