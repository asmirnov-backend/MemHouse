import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../../../prisma/@genereted/inputs/string-field-update-operations.input';
import { MemUpdateimgUrlsInput } from './mem-updateimg-urls.input';
import { NullableStringFieldUpdateOperationsInput } from '../../../prisma/@genereted/inputs/nullable-string-field-update-operations.input';
import { MemUpdatetagsInput } from './mem-updatetags.input';
import { IntFieldUpdateOperationsInput } from '../../../prisma/@genereted/inputs/int-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../../../prisma/@genereted/inputs/float-field-update-operations.input';

@InputType()
export class MemUpdateManyMutationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => MemUpdateimgUrlsInput, {nullable:true})
    imgUrls?: MemUpdateimgUrlsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    text?: NullableStringFieldUpdateOperationsInput;

    @Field(() => MemUpdatetagsInput, {nullable:true})
    tags?: MemUpdatetagsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    likes?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    dislikes?: IntFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    rating?: FloatFieldUpdateOperationsInput;
}
