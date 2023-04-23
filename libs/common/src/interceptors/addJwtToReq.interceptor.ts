import { JwtTokenBody } from '../../../interfaces/src/jwtToken.interface';

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { isUndefined } from 'lodash';
import { Observable } from 'rxjs';

@Injectable()
export class AddJwtToReqInterceptor implements NestInterceptor {
  constructor(private jwtService: JwtService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const gqlContext = GqlExecutionContext.create(context);
    const request = gqlContext.getContext<{
      req: Request & { jwt?: JwtTokenBody };
    }>().req;

    const authHeader = request.headers.authorization;
    if (isUndefined(authHeader)) return next.handle();

    const [bearer, token] = authHeader.split(' ');

    if (bearer !== 'Bearer' || !token) return next.handle();

    const jwtTokenBody = this.jwtService.decode(token) as JwtTokenBody;

    request.jwt = jwtTokenBody;

    return next.handle();
  }
}
