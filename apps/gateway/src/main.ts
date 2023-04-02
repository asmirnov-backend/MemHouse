import { AppModule } from './app.module';

import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const logger = new Logger('bootstrap');

  // { cors: true } is needed to process requests from the internet
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: [
        'https://memhouse-client.web.app',
        'http://localhost:3000',
        'http://localhost:3001',
        'http://127.0.0.1:3000',
        'https://localhost',
      ],
      credentials: true,
    },
  });

  const config = app.get(ConfigService);
  const port = Number(config.getOrThrow<string>('GATEWAY_PORT')) || 3000;

  await app.listen(port);
  logger.log(`Nest is started on port ${port}`);
}
bootstrap();
