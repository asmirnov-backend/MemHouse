import { Field, InputType, HideField, Float } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class UserCreateInput {
  @HideField()
  id?: string;

  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;

  @Field(() => String, { nullable: false })
  @Validator.MinLength(6)
  password!: string;

  @Field(() => String, { nullable: false })
  nickname!: string;

  @HideField()
  money?: number;
}
