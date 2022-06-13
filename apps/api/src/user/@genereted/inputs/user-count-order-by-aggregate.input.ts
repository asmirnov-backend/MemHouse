import { SortOrder } from '../../../prisma/@genereted/enums/sort-order.enum';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  nickname?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  money?: keyof typeof SortOrder;
}
