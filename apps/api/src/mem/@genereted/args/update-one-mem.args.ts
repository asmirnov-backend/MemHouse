import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemUpdateInput } from '../inputs/mem-update.input';
import { Type } from 'class-transformer';
import { MemWhereUniqueInput } from '../inputs/mem-where-unique.input';

@ArgsType()
export class UpdateOneMemArgs {

    @Field(() => MemUpdateInput, {nullable:false})
    @Type(() => MemUpdateInput)
    data!: MemUpdateInput;

    @Field(() => MemWhereUniqueInput, {nullable:false})
    @Type(() => MemWhereUniqueInput)
    where!: MemWhereUniqueInput;
}
