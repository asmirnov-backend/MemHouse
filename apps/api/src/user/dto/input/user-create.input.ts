import { InputType } from '@nestjs/graphql';
import { IsEmail, IsString, Matches } from 'class-validator';

@InputType()
export class UserCreateInput {
  @IsEmail()
  email: string;

  @IsString()
  @Matches(new RegExp('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}'))
  password: string;

  @IsString()
  nickname: string;
}
