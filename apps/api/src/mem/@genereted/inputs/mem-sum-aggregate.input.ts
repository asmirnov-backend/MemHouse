import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MemSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    likes?: true;

    @Field(() => Boolean, {nullable:true})
    dislikes?: true;

    @Field(() => Boolean, {nullable:true})
    rating?: true;
}
