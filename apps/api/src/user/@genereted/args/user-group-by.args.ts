import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserWhereInput } from '../inputs/user-where.input';
import { Type } from 'class-transformer';
import { UserOrderByWithAggregationInput } from '../inputs/user-order-by-with-aggregation.input';
import { UserScalarFieldEnum } from '../enums/user-scalar-field.enum';
import { UserScalarWhereWithAggregatesInput } from '../inputs/user-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserCountAggregateInput } from '../inputs/user-count-aggregate.input';
import { UserAvgAggregateInput } from '../inputs/user-avg-aggregate.input';
import { UserSumAggregateInput } from '../inputs/user-sum-aggregate.input';
import { UserMinAggregateInput } from '../inputs/user-min-aggregate.input';
import { UserMaxAggregateInput } from '../inputs/user-max-aggregate.input';

@ArgsType()
export class UserGroupByArgs {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;

    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;

    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: UserCountAggregateInput;

    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: UserAvgAggregateInput;

    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: UserSumAggregateInput;

    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: UserMinAggregateInput;

    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: UserMaxAggregateInput;
}
