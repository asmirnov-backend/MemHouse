import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemCreateInput } from '../inputs/mem-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMemArgs {

    @Field(() => MemCreateInput, {nullable:false})
    @Type(() => MemCreateInput)
    data!: MemCreateInput;
}
