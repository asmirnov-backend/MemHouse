import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemWhereInput } from '../inputs/mem-where.input';
import { Type } from 'class-transformer';
import { MemOrderByWithAggregationInput } from '../inputs/mem-order-by-with-aggregation.input';
import { MemScalarFieldEnum } from '../enums/mem-scalar-field.enum';
import { MemScalarWhereWithAggregatesInput } from '../inputs/mem-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MemCountAggregateInput } from '../inputs/mem-count-aggregate.input';
import { MemAvgAggregateInput } from '../inputs/mem-avg-aggregate.input';
import { MemSumAggregateInput } from '../inputs/mem-sum-aggregate.input';
import { MemMinAggregateInput } from '../inputs/mem-min-aggregate.input';
import { MemMaxAggregateInput } from '../inputs/mem-max-aggregate.input';

@ArgsType()
export class MemGroupByArgs {

    @Field(() => MemWhereInput, {nullable:true})
    @Type(() => MemWhereInput)
    where?: MemWhereInput;

    @Field(() => [MemOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MemOrderByWithAggregationInput>;

    @Field(() => [MemScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MemScalarFieldEnum>;

    @Field(() => MemScalarWhereWithAggregatesInput, {nullable:true})
    having?: MemScalarWhereWithAggregatesInput;

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
