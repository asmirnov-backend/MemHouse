import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export const CORS: CorsOptions = {
  origin: [
    'https://memhouse-client.web.app',
    'http://localhost:2999',
    'http://localhost:3000',
    'http://localhost:3001',
    'http://127.0.0.1:3000',
    'https://localhost',
  ],
  credentials: true,
};
