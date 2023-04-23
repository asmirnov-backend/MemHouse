import { Field, ObjectType } from '@nestjs/graphql';
import { MemReaction, MemReactionType } from '@prisma/client';

@ObjectType()
export class MemReactionModel implements MemReaction {
  memId: string;

  @Field(() => String)
  type: MemReactionType;

  userId: string;

  createdAt: Date;
  updatedAt: Date;
}
