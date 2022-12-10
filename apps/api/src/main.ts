import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const appContext = await NestFactory.create(ConfigModule.forRoot());
  const config = appContext.get(ConfigService);
  const httpPort = Number(config.get<string>('APP_PORT')) || 3000;

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

  await app.listen(httpPort);
}
bootstrap();
