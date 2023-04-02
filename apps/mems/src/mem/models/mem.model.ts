import { ObjectType } from '@nestjs/graphql';
import { Mem } from '@prisma/client';

@ObjectType()
export class MemModel implements Mem {
  id: string;

  text: string | null;

  createdUserId: string | null;

  createdAt: Date;
  updatedAt: Date;
}
