import { UserNotAuthorizedException } from '../../../../apps/user/src/auth/exceptions/userNotAuthorized.exception';
import { JwtTokenBody } from '../../../interface/src/jwtToken.interface';

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;

    try {
      const authHeader = request.headers.authorization;
      console.log({ authHeader });

      const [bearer, token] = authHeader.split(' ');

      if (bearer !== 'Bearer' || !token) {
        throw new UserNotAuthorizedException();
      }

      const jwtTokenBody = this.jwtService.verify<JwtTokenBody>(token, {
        secret: process.env.JWT_SECRET,
      });

      request.jwt = jwtTokenBody;

      return true;
    } catch (e) {
      throw new UserNotAuthorizedException();
    }
  }
}
