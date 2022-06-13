import { FloatFilter } from '../../../prisma/@genereted/inputs/float-filter.input';
import { IntFilter } from '../../../prisma/@genereted/inputs/int-filter.input';
import { StringFilter } from '../../../prisma/@genereted/inputs/string-filter.input';
import { StringNullableFilter } from '../../../prisma/@genereted/inputs/string-nullable-filter.input';
import { StringNullableListFilter } from '../../../prisma/@genereted/inputs/string-nullable-list-filter.input';

import { Field, InputType, HideField } from '@nestjs/graphql';

@InputType()
export class MemWhereInput {
  @Field(() => [MemWhereInput], { nullable: true })
  AND?: Array<MemWhereInput>;

  @Field(() => [MemWhereInput], { nullable: true })
  OR?: Array<MemWhereInput>;

  @Field(() => [MemWhereInput], { nullable: true })
  NOT?: Array<MemWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  imgUrls?: StringNullableListFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  text?: StringNullableFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  tags?: StringNullableListFilter;

  @Field(() => IntFilter, { nullable: true })
  likes?: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  dislikes?: IntFilter;

  @HideField()
  rating?: FloatFilter;
}
