import { Field, InputType, HideField } from '@nestjs/graphql';

@InputType()
export class UserAvgAggregateInput {
  @HideField()
  money?: true;
}
