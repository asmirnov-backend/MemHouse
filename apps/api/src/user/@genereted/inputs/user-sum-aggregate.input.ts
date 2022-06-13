import { Field, InputType, HideField } from '@nestjs/graphql';

@InputType()
export class UserSumAggregateInput {
  @HideField()
  money?: true;
}
