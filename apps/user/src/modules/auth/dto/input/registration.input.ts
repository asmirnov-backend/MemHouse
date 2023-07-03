import { IsBirthday } from '../../../../validators/isBirthday.validator';
import { IsName } from '../../../../validators/isName.validator';
import { IsNickname } from '../../../../validators/isNickname.validator';
import { IsSurname } from '../../../../validators/isSurname.validator';

import { InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

@InputType()
export class RegistrationInput {
  @IsEmail()
  email: string;

  @IsString()
  // @Matches(new RegExp('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}'))
  @MinLength(6)
  password: string;

  @IsNickname()
  nickname: string;

  @IsName()
  name: string;

  @IsSurname()
  surname: string;

  @IsOptional()
  @IsBirthday()
  birthday?: string;
}
