import { InputType } from '@nestjs/graphql';
import { IsOptional, IsUUID } from 'class-validator';

@InputType()
export class UserByIdInput {
  @IsOptional()
  @IsUUID()
  id: string;
}
