import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthCheckController {
  @Get('/health')
  healthCheck(): { status: string } {
    return { status: 'up' };
  }
}
