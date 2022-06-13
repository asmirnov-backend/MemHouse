import { IQuery } from '@api/graphql.schema';

import { Resolver } from '@nestjs/graphql';
import { User } from '@prisma/client';

@Resolver()
export class UserResolver implements Pick<IQuery, 'user'> {
  user(uniqueId: string): User | Promise<User> {
    throw new Error('Method not implemented.');
  }
}
