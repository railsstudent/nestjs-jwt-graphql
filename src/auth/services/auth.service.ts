import { Injectable } from '@nestjs/common';
import { LoginDto } from '../dtos';

@Injectable()
export class AuthService {
  login(loginDto: LoginDto) {
    return loginDto;
  }
}
