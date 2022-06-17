import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class Mem {
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
