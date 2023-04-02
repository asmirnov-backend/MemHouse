import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class JwtTokenModel {
  jwtToken: string;
}
