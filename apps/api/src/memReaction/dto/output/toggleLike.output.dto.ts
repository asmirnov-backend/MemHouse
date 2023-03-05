import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ToggleLikeOutputDto {
  @Field(() => Int)
  likes: number;
}
