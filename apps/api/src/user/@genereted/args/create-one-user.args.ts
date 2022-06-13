import { UserCreateInput } from '../inputs/user-create.input';

import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserArgs {
  @Field(() => UserCreateInput, { nullable: false })
  @Type(() => UserCreateInput)
  data!: UserCreateInput;
}
