import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ImageMeta } from '@prisma/client';

@ObjectType()
export class ImageDto implements Omit<ImageMeta, 'originMeta'> {
  id: string;

  title: string;

  displayUrl: string;

  @Field(() => Int)
  width: number;

  @Field(() => Int)
  height: number;

  @Field(() => Int)
  size: number;

  createdAt: Date;
  updatedAt: Date;

  memId: string | null;
}
