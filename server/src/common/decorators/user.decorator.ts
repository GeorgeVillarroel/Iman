import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserHydratedDocument } from 'src/modules/users/schemas/user.schema';

export const PayloadUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const http = ctx.switchToHttp();
    const request = http.getRequest<Request & { user: UserHydratedDocument }>();
    const user = request.user;

    if (data && user) {
      return user[data] as unknown;
    }

    return user;
  },
);
