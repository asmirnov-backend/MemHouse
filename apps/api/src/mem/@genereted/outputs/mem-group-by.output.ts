import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { MemCountAggregate } from './mem-count-aggregate.output';
import { MemAvgAggregate } from './mem-avg-aggregate.output';
import { MemSumAggregate } from './mem-sum-aggregate.output';
import { MemMinAggregate } from './mem-min-aggregate.output';
import { MemMaxAggregate } from './mem-max-aggregate.output';

@ObjectType()
export class MemGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => [String], {nullable:true})
    imgUrls?: Array<string>;

    @Field(() => String, {nullable:true})
    text?: string;

    @Field(() => [String], {nullable:true})
    tags?: Array<string>;

    @Field(() => Int, {nullable:false})
    likes!: number;

    @Field(() => Int, {nullable:false})
    dislikes!: number;

    @Field(() => Float, {nullable:false})
    rating!: number;

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
