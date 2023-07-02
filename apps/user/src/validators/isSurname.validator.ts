import { applyDecorators } from '@nestjs/common';
import { IsString, MinLength } from 'class-validator';

export function IsSurname() {
  return applyDecorators(IsString(), MinLength(1));
}
