import { IntrospectAndCompose, RemoteGraphQLDataSource } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GqlExecutionContext, GraphQLModule } from '@nestjs/graphql';
import { HealthCheckModule } from '../../../libs/common/src/modules/healthCheck/healthCheck.module';

@Module({
  imports: [
    HealthCheckModule,
    GraphQLModule.forRootAsync<ApolloGatewayDriverConfig>({
      imports: [ConfigModule],
      driver: ApolloGatewayDriver,
      useFactory: async (config: ConfigService) => ({
        server: { autoTransformHttpErrors: true, sortSchema: true },
        gateway: {
          buildService: ({ name, url }) => {
            return new RemoteGraphQLDataSource({
              url,
              willSendRequest({ request, context }: any) {
                if ('req' in context) {
                  request.http.headers.set(
                    'authorization',
                    context.req.headers?.authorization,
                  );
                }
              },
            });
          },
          supergraphSdl: new IntrospectAndCompose({
            subgraphs: [
              {
                name: 'user',
                url: `${config.getOrThrow(
                  'MEMHOUSE_USER_HOST_WITH_PORT',
                )}/graphql`,
              },
              {
                name: 'mem',
                url: `${config.getOrThrow(
                  'MEMHOUSE_MEM_HOST_WITH_PORT',
                )}/graphql`,
              },
            ],
          }),
        },
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
