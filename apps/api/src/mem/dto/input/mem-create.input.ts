import { InputType } from '@nestjs/graphql';

@InputType()
export class MemCreateInput {
  imgUrls: string[];
  text?: string;
  tags?: string[];
}
