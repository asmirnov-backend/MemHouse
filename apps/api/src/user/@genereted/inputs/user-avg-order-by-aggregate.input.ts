import { SortOrder } from '../../../prisma/@genereted/enums/sort-order.enum';

import { Field, InputType, HideField } from '@nestjs/graphql';

@InputType()
export class UserAvgOrderByAggregateInput {
  @HideField()
  money?: keyof typeof SortOrder;
}
