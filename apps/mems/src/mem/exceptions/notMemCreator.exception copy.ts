import { ForbiddenException } from '@nestjs/common';

export class NotMemCreatorException extends ForbiddenException {
  constructor() {
    super('You are not the creater of this mem');
  }
}
