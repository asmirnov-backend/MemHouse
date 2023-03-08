import { Field, InputType } from '@nestjs/graphql';
import { IsDefined, IsUUID } from 'class-validator';

@InputType()
export class ToggleReactionInputDto {
  @Field(() => String)
  @IsDefined()
  @IsUUID(4)
  memId: string;
}
