import { Injectable } from '@nestjs/common';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization']?.split(' ')[1]; // Asegúrate de que el token esté en formato Bearer

    if (!token) {
      throw new Error('Token no encontrado');
    }

    try {
      const user = this.jwtService.verify(token); // Verifica el token
      request.user = user; // Asocia el usuario a la solicitud
      return true; // Si la verificación es exitosa
    } catch (error) {
      throw new Error('Token inválido');
    }
  }
}
