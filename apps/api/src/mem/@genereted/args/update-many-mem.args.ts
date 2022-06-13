import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemUpdateManyMutationInput } from '../inputs/mem-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MemWhereInput } from '../inputs/mem-where.input';

@ArgsType()
export class UpdateManyMemArgs {

    @Field(() => MemUpdateManyMutationInput, {nullable:false})
    @Type(() => MemUpdateManyMutationInput)
    data!: MemUpdateManyMutationInput;

    @Field(() => MemWhereInput, {nullable:true})
    @Type(() => MemWhereInput)
    where?: MemWhereInput;
}
