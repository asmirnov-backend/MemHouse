import { HealthCheckController } from './healthCheck.controller';

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [HealthCheckController],
})
export class HealthCheckModule {}
