import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsOptional, Max } from 'class-validator';

@InputType()
export class GetMemsInput {
  @Field(() => Int)
  @IsOptional()
  @IsInt()
  @Max(100)
  take = 10;

  @Field(() => Int)
  @IsOptional()
  @IsInt()
  skip = 0;
}
