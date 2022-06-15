import { Field, ObjectType, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class Mem {
  @Field(() => ID)
  id: string;

  imgUrls: string[];

  text?: string | null;

  tags?: string[];

  @Field(() => Int)
  likes: number;

  @Field(() => Int)
  dislikes: number;

  rating: number;
}
