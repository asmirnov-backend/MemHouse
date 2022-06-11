import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./apps/api/src/user/user.graphql'],
      definitions: { path: 'apps/api/src/user/user.graphql.interface.ts' },
    }),
  ],
  providers: [UserService, UserResolver],
})
export class UserModule {}
