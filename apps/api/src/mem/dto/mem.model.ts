import { Field, ObjectType, ID, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Mem {
  @Field(() => ID)
  id: string;

  imgUrls: string[];

  text?: string | null;

  tags?: string[];

  @Field(() => Int, { defaultValue: 0 })
  likes: number;

  @Field(() => Int, { defaultValue: 0 })
  dislikes: number;

  @Field(() => Float)
  rating: number;
}
