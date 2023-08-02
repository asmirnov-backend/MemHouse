import { AppModule } from './app.module';

import { CORS } from '../../../libs/common/src/consts/cors.const';

import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';

async function bootstrap() {
  const logger = new Logger('bootstrap');

  // { cors: true } is needed to process requests from the internet
  const app = await NestFactory.create(AppModule, {
    cors: CORS,
  }); //

  const config = app.get(ConfigService);
  const port = 3001;
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  await app.listen(port);
  logger.log(`Nest is started on port ${port}`);
}
bootstrap();
