import { Field, InputType, HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class UserWhereUniqueInput {
  @HideField()
  id?: string;

  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;

  @Field(() => String, { nullable: true })
  nickname?: string;
}
