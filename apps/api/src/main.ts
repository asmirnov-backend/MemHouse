import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const config = appContext.get(ConfigService);
  const httpPort = Number(config.get<string>('APP_PORT')) || 3000;

  // { cors: true } is needed to process requests from the internet
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(httpPort);
}
bootstrap();
