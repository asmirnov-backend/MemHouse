import { UserCreateInput } from '../inputs/user-create.input';
import { UserUpdateInput } from '../inputs/user-update.input';
import { UserWhereUniqueInput } from '../inputs/user-where-unique.input';

import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@ArgsType()
export class UpsertOneUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateInput, { nullable: false })
  @Type(() => UserCreateInput)
  create!: UserCreateInput;

  @Field(() => UserUpdateInput, { nullable: false })
  @Type(() => UserUpdateInput)
  update!: UserUpdateInput;
}
