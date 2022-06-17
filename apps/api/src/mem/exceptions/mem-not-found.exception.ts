import { NotFoundException } from '@nestjs/common';

export class MemNotFoundException extends NotFoundException {
  constructor(memId: string) {
    super(`Mem with id=${memId} not found`);
  }
}
