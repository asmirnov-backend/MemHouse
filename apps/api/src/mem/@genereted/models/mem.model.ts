import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Mem {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => [String], {nullable:true})
    imgUrls!: Array<string>;

    @Field(() => String, {nullable:true})
    text!: string | null;

    @Field(() => [String], {nullable:true})
    tags!: Array<string>;

    @Field(() => Int, {nullable:false,defaultValue:0})
    likes!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    dislikes!: number;

    @Field(() => Float, {nullable:false})
    rating!: number;
}
