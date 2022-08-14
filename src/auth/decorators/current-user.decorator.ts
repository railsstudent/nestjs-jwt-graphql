import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ValidatedUser } from '@/user';

export const CurrentUser = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<{ user: ValidatedUser }>();
  const user = request.user;
  return data ? user[data as keyof typeof user] : user;
});
