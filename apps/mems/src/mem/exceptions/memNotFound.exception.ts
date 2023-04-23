import { BadRequestException } from '@nestjs/common';

export class MemNotFoundException extends BadRequestException {
  constructor(memId: string) {
    super(`Mem with id=${memId} not found`);
  }
}
