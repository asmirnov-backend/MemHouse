import { FloatFieldUpdateOperationsInput } from '../../../prisma/@genereted/inputs/float-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../../prisma/@genereted/inputs/string-field-update-operations.input';

import { Field, InputType, HideField } from '@nestjs/graphql';

@InputType()
export class UserUpdateManyMutationInput {
  @HideField()
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  nickname?: StringFieldUpdateOperationsInput;

  @HideField()
  money?: FloatFieldUpdateOperationsInput;
}
