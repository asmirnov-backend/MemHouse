import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MemUpdatetagsInput {
  @Field(() => [String], { nullable: true })
  set?: Array<string>;

  @Field(() => [String], { nullable: true })
  push?: Array<string>;
}
