import { AppController } from './app.controller';
import { MemModule } from './mem/mem.module';
import { UserModule } from './user/user.module';

import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoTransformHttpErrors: true,
      autoSchemaFile: join(process.cwd(), '/apps/api/src/schema.gql'),
      sortSchema: false,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    MemModule,
    UserModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
