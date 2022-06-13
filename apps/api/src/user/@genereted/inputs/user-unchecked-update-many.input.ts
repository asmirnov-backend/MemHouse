import { FloatFieldUpdateOperationsInput } from '../../../prisma/@genereted/inputs/float-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../../prisma/@genereted/inputs/string-field-update-operations.input';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  nickname?: StringFieldUpdateOperationsInput;

  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  money?: FloatFieldUpdateOperationsInput;
}
