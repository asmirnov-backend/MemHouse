import { applyDecorators } from '@nestjs/common';
import { IsDateString } from 'class-validator';

export function IsBirthday() {
  return applyDecorators(IsDateString());
}
