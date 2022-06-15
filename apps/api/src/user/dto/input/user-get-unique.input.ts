import { InputType, Field, ID } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class UserUniqueInput {
  @Field(() => ID)
  id?: string;

  @IsEmail()
  email?: string;

  nickname?: string;
}
