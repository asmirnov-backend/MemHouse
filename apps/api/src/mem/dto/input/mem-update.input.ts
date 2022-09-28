import { InputType } from '@nestjs/graphql';
import { IsArray, IsOptional, IsString, IsUUID } from 'class-validator';

@InputType()
export class MemUpdateInput {
  @IsUUID()
  id: string;

  @IsOptional()
  @IsArray()
  imgUrls?: string[];

  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @IsArray()
  tags?: string[];
}
