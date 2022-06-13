import { MemCreateInput } from '../inputs/mem-create.input';

import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMemArgs {
  @Field(() => MemCreateInput, { nullable: false })
  @Type(() => MemCreateInput)
  data!: MemCreateInput;
}
