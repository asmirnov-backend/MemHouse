import { InputType } from '@nestjs/graphql';
import { IsArray, IsOptional, IsString } from 'class-validator';

@InputType()
export class MemCreateInput {
  @IsArray()
  imgsBuffers: string[]; // base64 string buffers

  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @IsArray()
  tags?: string[];
}
