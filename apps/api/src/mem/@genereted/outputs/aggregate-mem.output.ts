import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MemCountAggregate } from './mem-count-aggregate.output';
import { MemAvgAggregate } from './mem-avg-aggregate.output';
import { MemSumAggregate } from './mem-sum-aggregate.output';
import { MemMinAggregate } from './mem-min-aggregate.output';
import { MemMaxAggregate } from './mem-max-aggregate.output';

@ObjectType()
export class AggregateMem {

    @Field(() => MemCountAggregate, {nullable:true})
    _count?: MemCountAggregate;

    @Field(() => MemAvgAggregate, {nullable:true})
    _avg?: MemAvgAggregate;

    @Field(() => MemSumAggregate, {nullable:true})
    _sum?: MemSumAggregate;

    @Field(() => MemMinAggregate, {nullable:true})
    _min?: MemMinAggregate;

    @Field(() => MemMaxAggregate, {nullable:true})
    _max?: MemMaxAggregate;
}
