import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemWhereInput } from '../inputs/mem-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMemArgs {

    @Field(() => MemWhereInput, {nullable:true})
    @Type(() => MemWhereInput)
    where?: MemWhereInput;
}
