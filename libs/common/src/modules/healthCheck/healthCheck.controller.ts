import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthCheckController {
  @Get('/health')
  healthCheck(): { message: string } {
    return { message: 'OK' };
  }
}
