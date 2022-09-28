import { Mem } from './mem.model';

import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MemFull extends Mem {
  @Field(() => Int)
  likes: number;

  @Field(() => Int)
  dislikes: number;

  rating: number | null;
}
