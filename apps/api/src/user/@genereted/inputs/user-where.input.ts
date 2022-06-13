import { FloatFilter } from '../../../prisma/@genereted/inputs/float-filter.input';
import { StringFilter } from '../../../prisma/@genereted/inputs/string-filter.input';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserWhereInput {
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: Array<UserWhereInput>;

  @Field(() => [UserWhereInput], { nullable: true })
  OR?: Array<UserWhereInput>;

  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: Array<UserWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  email?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  password?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  nickname?: StringFilter;

  @Field(() => FloatFilter, { nullable: true })
  money?: FloatFilter;
}
