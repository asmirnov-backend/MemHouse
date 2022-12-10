import { ImageDto } from './image.model';
import { MemDto } from './mem.model';

import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MemFullDto extends MemDto {
  @Field(() => Int)
  likes: number;

  @Field(() => Int)
  dislikes: number;

  rating: number | null;

  tags: string[];

  images: ImageDto[];
}
