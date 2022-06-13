import { MemScalarFieldEnum } from '../enums/mem-scalar-field.enum';
import { MemOrderByWithRelationInput } from '../inputs/mem-order-by-with-relation.input';
import { MemWhereUniqueInput } from '../inputs/mem-where-unique.input';
import { MemWhereInput } from '../inputs/mem-where.input';

import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@ArgsType()
export class FindFirstMemArgs {
  @Field(() => MemWhereInput, { nullable: true })
  @Type(() => MemWhereInput)
  where?: MemWhereInput;

  @Field(() => [MemOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<MemOrderByWithRelationInput>;

  @Field(() => MemWhereUniqueInput, { nullable: true })
  cursor?: MemWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [MemScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof MemScalarFieldEnum>;
}
