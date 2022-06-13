import { UserUpdateInput } from '../inputs/user-update.input';
import { UserWhereUniqueInput } from '../inputs/user-where-unique.input';

import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@ArgsType()
export class UpdateOneUserArgs {
  @Field(() => UserUpdateInput, { nullable: false })
  @Type(() => UserUpdateInput)
  data!: UserUpdateInput;

  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;
}
