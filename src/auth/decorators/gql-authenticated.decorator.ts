import { applyDecorators, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../guards';

export function GqlAuthenticated(): any {
  return applyDecorators(UseGuards(GqlAuthGuard));
}
