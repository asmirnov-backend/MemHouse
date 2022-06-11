import { IQuery, User } from '@api/graphql.interface';

import { Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver implements Pick<IQuery, 'user'> {
  user(uniqueId: string): User | Promise<User> {
    throw new Error('Method not implemented.');
  }
}
