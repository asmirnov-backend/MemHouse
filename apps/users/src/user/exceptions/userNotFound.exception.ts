import { BadRequestException } from '@nestjs/common';

export class UserNotFoundException extends BadRequestException {
  constructor(userId: string) {
    super(`User with id=${userId} not found`);
  }
}
