import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Image } from '@prisma/client';

@ObjectType()
export class ImageDto implements Omit<Image, 'meta'> {
  id: string;

  title: string;

  displayUrl: string;

  @Field(() => Int)
  width: number;

  @Field(() => Int)
  height: number;

  @Field(() => Int)
  size: number;

  memId: string | null;
}
