import { MemResolver } from './mem.resolver';
import { MemService } from './mem.service';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./apps/api/src/mem/mem.graphql'],
      definitions: { path: 'apps/api/src/mem/mem.graphql.interface.ts' },
    }),
  ],
  providers: [MemService, MemResolver],
})
export class MemModule {}
