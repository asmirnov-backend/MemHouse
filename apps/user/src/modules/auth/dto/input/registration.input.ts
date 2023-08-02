import { IsBirthday } from '../../../../validators/isBirthday.validator';
import { IsName } from '../../../../validators/isName.validator';
import { IsNickname } from '../../../../validators/isNickname.validator';
import { IsSurname } from '../../../../validators/isSurname.validator';
import { IsPassword } from '../../validators/isPassword.validator';

import { InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional } from 'class-validator';

@InputType()
export class RegistrationInput {
  @IsEmail()
  email: string;

  @IsPassword()
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
