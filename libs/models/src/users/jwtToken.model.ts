import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class JwtToken {
  jwtToken: string;
}
