import { Field, ObjectType, HideField, Float } from '@nestjs/graphql';

@ObjectType()
export class UserMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @HideField()
  password?: string;

  @Field(() => String, { nullable: true })
  nickname?: string;

  @Field(() => Float, { nullable: true })
  money?: number;
}
