import { InputType } from '@nestjs/graphql';
import { Equals, IsArray, IsOptional, IsString, IsUUID } from 'class-validator';

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
  @Equals(true)
  incrementLikesBy?: boolean;

  @IsOptional()
  @Equals(true)
  decrementLikesBy?: boolean;

  @IsOptional()
  @Equals(true)
  incrementDislikesByOne?: boolean;

  @IsOptional()
  @Equals(true)
  decrementDislikesByOne?: boolean;
}
