import { AppModule } from './app.module';

import { LoggingInterceptor } from '../../../libs/common/src/interceptors/logging.interceptor';

import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';

async function bootstrap() {
  const logger = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  const port = 3002;

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  await app.listen(port);
  logger.log(`Nest is started on port ${port}`);
}
bootstrap();
