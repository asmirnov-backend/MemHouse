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
      autoSchemaFile: join(process.cwd(), '/apps/api/src/schema.gql'),
      sortSchema: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    MemModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
