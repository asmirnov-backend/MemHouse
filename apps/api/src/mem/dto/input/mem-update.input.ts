import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class MemUpdateInput {
  @Field(() => ID)
  id: string;

  imgUrls?: string[];
  text?: string;
  tags?: string[];

  incrementLikesBy?: boolean;
  decrementLikesBy?: boolean;

  incrementDislikesByOne?: boolean;
  decrementDislikesByOne?: boolean;
}
