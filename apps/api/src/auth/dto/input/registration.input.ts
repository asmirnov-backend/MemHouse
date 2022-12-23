import { InputType } from '@nestjs/graphql';
import {
  IsDateString,
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

@InputType()
export class RegistrationInput {
  @IsEmail()
  email: string;

  @IsString()
  // @Matches(new RegExp('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}'))
  @MinLength(6)
  password: string;

  @IsString()
  @MinLength(1)
  nickname: string;

  @IsString()
  @MinLength(1)
  name: string;

  @IsString()
  @MinLength(1)
  surname: string;

  @IsDateString()
  @IsOptional()
  birthday?: string;
}
