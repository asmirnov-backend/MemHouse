import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../../prisma/@genereted/enums/sort-order.enum';

@InputType()
export class UserAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    money?: keyof typeof SortOrder;
}
