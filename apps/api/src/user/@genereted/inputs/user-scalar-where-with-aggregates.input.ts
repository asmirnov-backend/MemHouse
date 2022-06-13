import { FloatWithAggregatesFilter } from '../../../prisma/@genereted/inputs/float-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../../prisma/@genereted/inputs/string-with-aggregates-filter.input';

import { Field, InputType, HideField } from '@nestjs/graphql';

@InputType()
export class UserScalarWhereWithAggregatesInput {
  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<UserScalarWhereWithAggregatesInput>;

  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<UserScalarWhereWithAggregatesInput>;

  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<UserScalarWhereWithAggregatesInput>;

  @HideField()
  id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  email?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  password?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  nickname?: StringWithAggregatesFilter;

  @HideField()
  money?: FloatWithAggregatesFilter;
}
