import { MemUpdateManyMutationInput } from '../inputs/mem-update-many-mutation.input';
import { MemWhereInput } from '../inputs/mem-where.input';

import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@ArgsType()
export class UpdateManyMemArgs {
  @Field(() => MemUpdateManyMutationInput, { nullable: false })
  @Type(() => MemUpdateManyMutationInput)
  data!: MemUpdateManyMutationInput;

  @Field(() => MemWhereInput, { nullable: true })
  @Type(() => MemWhereInput)
  where?: MemWhereInput;
}
