import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MemUpdateimgUrlsInput {
  @Field(() => [String], { nullable: true })
  set?: Array<string>;

  @Field(() => [String], { nullable: true })
  push?: Array<string>;
}
