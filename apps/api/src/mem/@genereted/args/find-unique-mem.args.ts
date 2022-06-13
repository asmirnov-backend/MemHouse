import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemWhereUniqueInput } from '../inputs/mem-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMemArgs {

    @Field(() => MemWhereUniqueInput, {nullable:false})
    @Type(() => MemWhereUniqueInput)
    where!: MemWhereUniqueInput;
}
