import { MemCreateManyInput } from '../inputs/mem-create-many.input';

import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMemArgs {
  @Field(() => [MemCreateManyInput], { nullable: false })
  @Type(() => MemCreateManyInput)
  data!: Array<MemCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
