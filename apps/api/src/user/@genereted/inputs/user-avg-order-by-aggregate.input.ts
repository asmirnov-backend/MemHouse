import { SortOrder } from '../../../prisma/@genereted/enums/sort-order.enum';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  money?: keyof typeof SortOrder;
}
