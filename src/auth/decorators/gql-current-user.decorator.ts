import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ValidatedUser } from '@/user';

type GqlContext = {
  req: {
    user: ValidatedUser;
  };
};

export const GqlCurrentUser = createParamDecorator((data: string, context: ExecutionContext) => {
  const ctx = GqlExecutionContext.create(context);
  const user = ctx.getContext<GqlContext>().req.user;
  return data ? user[data as keyof typeof user] : user;
});
