import { InputType } from '@nestjs/graphql';
import { IsArray, IsOptional, IsString } from 'class-validator';

@InputType()
export class MemCreateInput {
  @IsArray()
  imgUrls: string[];

  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @IsArray()
  tags?: string[];
}
