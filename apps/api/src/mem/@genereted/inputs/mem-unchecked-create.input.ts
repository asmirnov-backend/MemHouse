import { MemCreateimgUrlsInput } from './mem-createimg-urls.input';
import { MemCreatetagsInput } from './mem-createtags.input';

import { Field, InputType, Int, Float, HideField } from '@nestjs/graphql';

@InputType()
export class MemUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => MemCreateimgUrlsInput, { nullable: true })
  imgUrls?: MemCreateimgUrlsInput;

  @Field(() => String, { nullable: true })
  text?: string;

  @Field(() => MemCreatetagsInput, { nullable: true })
  tags?: MemCreatetagsInput;

  @Field(() => Int, { nullable: true })
  likes?: number;

  @Field(() => Int, { nullable: true })
  dislikes?: number;

  @HideField()
  rating!: number;
}
