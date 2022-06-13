import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemCreateimgUrlsInput } from './mem-createimg-urls.input';
import { MemCreatetagsInput } from './mem-createtags.input';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class MemCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => MemCreateimgUrlsInput, {nullable:true})
    imgUrls?: MemCreateimgUrlsInput;

    @Field(() => String, {nullable:true})
    text?: string;

    @Field(() => MemCreatetagsInput, {nullable:true})
    tags?: MemCreatetagsInput;

    @Field(() => Int, {nullable:true})
    likes?: number;

    @Field(() => Int, {nullable:true})
    dislikes?: number;

    @Field(() => Float, {nullable:false})
    rating!: number;
}
