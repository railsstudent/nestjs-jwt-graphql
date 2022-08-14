import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guards';

export function Authenticated(): any {
  return applyDecorators(UseGuards(JwtAuthGuard));
}
