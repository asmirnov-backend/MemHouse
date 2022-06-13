import { MemUpdateInput } from '../inputs/mem-update.input';
import { MemWhereUniqueInput } from '../inputs/mem-where-unique.input';

import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@ArgsType()
export class UpdateOneMemArgs {
  @Field(() => MemUpdateInput, { nullable: false })
  @Type(() => MemUpdateInput)
  data!: MemUpdateInput;

  @Field(() => MemWhereUniqueInput, { nullable: false })
  @Type(() => MemWhereUniqueInput)
  where!: MemWhereUniqueInput;
}
