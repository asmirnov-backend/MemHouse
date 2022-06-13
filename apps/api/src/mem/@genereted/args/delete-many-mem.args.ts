import { MemWhereInput } from '../inputs/mem-where.input';

import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMemArgs {
  @Field(() => MemWhereInput, { nullable: true })
  @Type(() => MemWhereInput)
  where?: MemWhereInput;
}
