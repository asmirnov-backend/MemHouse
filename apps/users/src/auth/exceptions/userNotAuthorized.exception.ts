import { UnauthorizedException } from '@nestjs/common';

export class UserNotAuthorizedException extends UnauthorizedException {
  constructor() {
    super('Пользователь не авторизован');
  }
}
