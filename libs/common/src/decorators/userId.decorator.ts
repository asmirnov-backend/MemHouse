import { JwtTokenBody } from '../../../interfaces/src/jwtToken.interface';

import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const UserId = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;

    // jwt добавляется к request в Guard-е или AddJwtToReqInterceptor
    return (request.jwt as JwtTokenBody)?.id;
  },
);
