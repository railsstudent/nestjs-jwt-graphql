import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from '../dtos';
import { AuthService } from '../services';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: LoginDto): Promise<{ token: string; refreshToken: string }> {
    return this.authService.login(loginDto);
  }
}
