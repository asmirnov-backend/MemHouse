import { ObjectType } from '@nestjs/graphql';
import { Mem } from '@prisma/client';

@ObjectType()
export class MemDto implements Mem {
  id: string;

  text: string | null;

  createdUserId: string;
}
