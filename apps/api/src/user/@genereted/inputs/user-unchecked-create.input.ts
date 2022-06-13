import { Field, InputType, Float } from '@nestjs/graphql';

@InputType()
export class UserUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => String, { nullable: false })
  nickname!: string;

  @Field(() => Float, { nullable: true })
  money?: number;
}
