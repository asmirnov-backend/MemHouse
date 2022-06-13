import { AppController } from './app.controller';
import { MemModule } from './mem/mem.module';
import { UserModule } from './user/user.module';

import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./apps/api/src/**/*.graphql'],
      definitions: { path: 'apps/api/src/graphql.schema.ts' },
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    MemModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
