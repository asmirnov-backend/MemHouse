import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MemDto {
  id: string;

  imgUrls: string[];

  text?: string | null;

  tags?: string[];
}
