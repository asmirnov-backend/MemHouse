import { MemAvgAggregateInput } from '../inputs/mem-avg-aggregate.input';
import { MemCountAggregateInput } from '../inputs/mem-count-aggregate.input';
import { MemMaxAggregateInput } from '../inputs/mem-max-aggregate.input';
import { MemMinAggregateInput } from '../inputs/mem-min-aggregate.input';
import { MemOrderByWithRelationInput } from '../inputs/mem-order-by-with-relation.input';
import { MemSumAggregateInput } from '../inputs/mem-sum-aggregate.input';
import { MemWhereUniqueInput } from '../inputs/mem-where-unique.input';
import { MemWhereInput } from '../inputs/mem-where.input';

import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@ArgsType()
export class MemAggregateArgs {
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

  @Field(() => MemCountAggregateInput, { nullable: true })
  _count?: MemCountAggregateInput;

  @Field(() => MemAvgAggregateInput, { nullable: true })
  _avg?: MemAvgAggregateInput;

  @Field(() => MemSumAggregateInput, { nullable: true })
  _sum?: MemSumAggregateInput;

  @Field(() => MemMinAggregateInput, { nullable: true })
  _min?: MemMinAggregateInput;

  @Field(() => MemMaxAggregateInput, { nullable: true })
  _max?: MemMaxAggregateInput;
}
