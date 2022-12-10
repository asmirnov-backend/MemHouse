import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsOptional, IsString } from 'class-validator';

@InputType()
export class MemCreateInput {
  @IsArray()
  @Field({ description: 'base64 string buffers' })
  imgsBuffers: string[];

  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @IsArray()
  tags?: string[];
}
