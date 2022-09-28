import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Mem {
  id: string;

  imgUrls: string[];

  text?: string | null;

  tags?: string[];
}
