import { FloatWithAggregatesFilter } from '../../../prisma/@genereted/inputs/float-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../../../prisma/@genereted/inputs/int-with-aggregates-filter.input';
import { StringNullableListFilter } from '../../../prisma/@genereted/inputs/string-nullable-list-filter.input';
import { StringNullableWithAggregatesFilter } from '../../../prisma/@genereted/inputs/string-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../../prisma/@genereted/inputs/string-with-aggregates-filter.input';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MemScalarWhereWithAggregatesInput {
  @Field(() => [MemScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<MemScalarWhereWithAggregatesInput>;

  @Field(() => [MemScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<MemScalarWhereWithAggregatesInput>;

  @Field(() => [MemScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<MemScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  imgUrls?: StringNullableListFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  text?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  tags?: StringNullableListFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  likes?: IntWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  dislikes?: IntWithAggregatesFilter;

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  rating?: FloatWithAggregatesFilter;
}
