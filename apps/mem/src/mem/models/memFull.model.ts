import { MemModel } from './mem.model';

import { ImageModel } from '../../store/models/image.model';

import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MemFullModel extends MemModel {
  @Field(() => Int)
  likes: number;

  @Field(() => Int)
  dislikes: number;

  rating: number | null;

  tags: string[];

  images: ImageModel[];

  isCurrentUserHasSetLike: boolean;
  isCurrentUserHasSetDislike: boolean;
}
