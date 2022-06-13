import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MemWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
}
