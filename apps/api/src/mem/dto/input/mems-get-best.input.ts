import { Field, Int, InputType } from '@nestjs/graphql';
import { IsInt, IsOptional } from 'class-validator';

@InputType()
export class MemsGetBestInput {
  @Field(() => Int)
  @IsOptional()
  @IsInt()
  take = 10;

  @Field(() => Int)
  @IsOptional()
  @IsInt()
  skip = 0;
}
