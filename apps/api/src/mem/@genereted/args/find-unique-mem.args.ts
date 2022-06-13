import { MemWhereUniqueInput } from '../inputs/mem-where-unique.input';

import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMemArgs {
  @Field(() => MemWhereUniqueInput, { nullable: false })
  @Type(() => MemWhereUniqueInput)
  where!: MemWhereUniqueInput;
}
