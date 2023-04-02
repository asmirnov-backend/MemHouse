import { AppController } from './app.controller';
import { MemModule } from './mem/mem.module';
import { MemReactionModule } from './memReaction/memReaction.module';
import { RatingModule } from './rating/rating.module';

import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoTransformHttpErrors: true,
      autoSchemaFile: join(process.cwd(), '/apps/mems/src/schema.gql'),
      sortSchema: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    MemModule,
    MemReactionModule,
    RatingModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
