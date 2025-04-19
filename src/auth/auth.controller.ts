import { Controller, Post, Body, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    try {
      return await this.authService.login(loginDto);
    } catch (error) {
      throw new Error('Error de autenticación: ' + error.message);
    }
  }

  @Post('register')
  async register(@Body() registerDto: { email: string; password: string; nombre: string; apellido: string }) {
    try {
      return await this.authService.register(registerDto);
    } catch (error) {
      throw new Error('Error en el registro: ' + error.message);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Request() req) {
    console.log("Usuario autenticado:", req.user); // Verifica el usuario autenticado

    return req.user;
  }

  // Nuevo endpoint para renovar el token
  @Post('refresh')
  async refreshToken(@Body() body: { refresh_token: string }) {
    try {
      return await this.authService.refreshToken(body.refresh_token);
    } catch (error) {
      throw new Error('Error al renovar el token: ' + error.message);
    }
  }
}