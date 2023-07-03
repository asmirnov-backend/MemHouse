import { applyDecorators } from '@nestjs/common';
import { IsString, MinLength } from 'class-validator';

export function IsPassword() {
  return applyDecorators(MinLength(6), IsString());
}
