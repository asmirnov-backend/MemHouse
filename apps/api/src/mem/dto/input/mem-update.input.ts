import { InputType } from '@nestjs/graphql';
import { IsArray, IsInt, IsOptional, IsString, IsUUID } from 'class-validator';

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

  @IsOptional()
  @IsInt()
  addLikes?: number;

  @IsOptional()
  @IsInt()
  addDislikes?: number;
}
