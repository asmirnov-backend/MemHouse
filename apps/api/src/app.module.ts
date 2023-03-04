import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { MemModule } from './mem/mem.module';
import { MemReactionModule } from './memReaction/memReaction.module';
import { UserModule } from './user/user.module';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
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
      sortSchema: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    MemModule,
    UserModule,
    AuthModule,
    MemReactionModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
