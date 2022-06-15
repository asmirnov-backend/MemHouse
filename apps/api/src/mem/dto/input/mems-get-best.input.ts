import { Field, Int, InputType } from '@nestjs/graphql';

@InputType()
export class MemsGetBestInput {
  @Field(() => Int, { defaultValue: 10 })
  take?: number;

  @Field(() => Int)
  skip?: number;
}
