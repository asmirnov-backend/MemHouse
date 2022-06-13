import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemWhereInput } from '../inputs/mem-where.input';
import { Type } from 'class-transformer';
import { MemOrderByWithRelationInput } from '../inputs/mem-order-by-with-relation.input';
import { MemWhereUniqueInput } from '../inputs/mem-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MemCountAggregateInput } from '../inputs/mem-count-aggregate.input';
import { MemAvgAggregateInput } from '../inputs/mem-avg-aggregate.input';
import { MemSumAggregateInput } from '../inputs/mem-sum-aggregate.input';
import { MemMinAggregateInput } from '../inputs/mem-min-aggregate.input';
import { MemMaxAggregateInput } from '../inputs/mem-max-aggregate.input';

@ArgsType()
export class MemAggregateArgs {

    @Field(() => MemWhereInput, {nullable:true})
    @Type(() => MemWhereInput)
    where?: MemWhereInput;

    @Field(() => [MemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MemOrderByWithRelationInput>;

    @Field(() => MemWhereUniqueInput, {nullable:true})
    cursor?: MemWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MemCountAggregateInput, {nullable:true})
    _count?: MemCountAggregateInput;

    @Field(() => MemAvgAggregateInput, {nullable:true})
    _avg?: MemAvgAggregateInput;

    @Field(() => MemSumAggregateInput, {nullable:true})
    _sum?: MemSumAggregateInput;

    @Field(() => MemMinAggregateInput, {nullable:true})
    _min?: MemMinAggregateInput;

    @Field(() => MemMaxAggregateInput, {nullable:true})
    _max?: MemMaxAggregateInput;
}
