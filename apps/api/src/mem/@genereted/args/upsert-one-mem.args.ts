import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemWhereUniqueInput } from '../inputs/mem-where-unique.input';
import { Type } from 'class-transformer';
import { MemCreateInput } from '../inputs/mem-create.input';
import { MemUpdateInput } from '../inputs/mem-update.input';

@ArgsType()
export class UpsertOneMemArgs {

    @Field(() => MemWhereUniqueInput, {nullable:false})
    @Type(() => MemWhereUniqueInput)
    where!: MemWhereUniqueInput;

    @Field(() => MemCreateInput, {nullable:false})
    @Type(() => MemCreateInput)
    create!: MemCreateInput;

    @Field(() => MemUpdateInput, {nullable:false})
    @Type(() => MemUpdateInput)
    update!: MemUpdateInput;
}
