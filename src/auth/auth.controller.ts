import { Controller, Post, Body, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard'; // Asegúrate de que importas el guard correcto

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Endpoint de login
  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    try {
      return await this.authService.login(loginDto); // Se pasa correctamente el DTO
    } catch (error) {
      throw new Error('Error de autenticación: ' + error.message);
    }
  }

  // Endpoint de registro de usuario
  @Post('register')
  async register(@Body() registerDto: { email: string; password: string; nombre: string; apellido: string }) {
    try {
      return await this.authService.register(registerDto); // Método para registrar al usuario
    } catch (error) {
      throw new Error('Error en el registro: ' + error.message);
    }
  }

  // Endpoint para obtener el perfil del usuario (requiere autenticación)
  @UseGuards(JwtAuthGuard)  // Protege esta ruta con el guard de JWT
  @Get('me')
  getProfile(@Request() req) {
    return req.user;  // Devolverá el usuario autenticado, si el token es válido
  }
}
