import { AppModule } from './app.module';
import { LoggingInterceptor } from './logging.interceptor';

import { ValidationPipe } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';

async function bootstrap() {
  const appContext = await NestFactory.create(ConfigModule.forRoot());
  const config = appContext.get(ConfigService);
  const httpPort = Number(config.getOrThrow<string>('APP_PORT')) || 3000;

  // { cors: true } is needed to process requests from the internet
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: [
        'https://memhouse-client.web.app',
        'http://localhost:3000',
        'https://localhost',
      ],
      credentials: true,
    },
  });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  await app.listen(httpPort);
}
bootstrap();
