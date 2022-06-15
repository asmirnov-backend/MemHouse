import { InputType, HideField } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';

@InputType()
export class UserCreateInput {
  @HideField()
  id?: string;

  @IsEmail()
  email!: string;

  @MinLength(6)
  password!: string;

  nickname!: string;
}
