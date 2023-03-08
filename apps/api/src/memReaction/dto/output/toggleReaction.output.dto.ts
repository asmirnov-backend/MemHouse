import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ToggleReactionOutputDto {
  @Field(() => Int)
  reactionAmount: number;
}
