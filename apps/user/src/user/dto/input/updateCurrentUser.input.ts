import { IsBirthday } from '../../../validators/isBirthday.validator';
import { IsName } from '../../../validators/isName.validator';
import { IsNickname } from '../../../validators/isNickname.validator';
import { IsSurname } from '../../../validators/isSurname.validator';

import { InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class UpdateCurrentUserInput {
  @IsOptional()
  @IsNickname()
  nickname?: string;

  @IsOptional()
  @IsName()
  name?: string;

  @IsOptional()
  @IsSurname()
  surname?: string;

  @IsOptional()
  @IsBirthday()
  birthday?: Date;
}
