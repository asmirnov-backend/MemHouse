import { SortOrder } from '../../../prisma/@genereted/enums/sort-order.enum';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MemCountOrderByAggregateInput {
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
}
