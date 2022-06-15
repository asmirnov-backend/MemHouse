import { InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsUUID } from 'class-validator';

@InputType()
export class UserUniqueInput {
  @IsOptional()
  @IsUUID()
  id?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  nickname?: string;
}
