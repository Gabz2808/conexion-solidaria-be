import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario) private userRepository: Repository<Usuario>,
    private jwtService: JwtService,
  ) {}

  // Método de login
  async login(loginDto: { email: string; password: string }) {
    const { email, password } = loginDto;

    // Busca al usuario en la base de datos por su email
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    // Verifica si la contraseña es correcta
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    // Genera el payload del token JWT
    const payload = { email: user.email, sub: user.idusuario }; // Incluye el id del usuario en el payload
    const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    return { access_token: accessToken, refresh_token: refreshToken };
  }

  // Método de registro
  async register(registerDto: { email: string; password: string; nombre: string; apellido: string }) {
    const { email, password, nombre, apellido } = registerDto;

    // Verifica si el usuario ya existe
    const existingUser = await this.userRepository.findOne({ where: { email } });
    if (existingUser) {
      throw new ConflictException('El correo electrónico ya está registrado');
    }

    // Encripta la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea un nuevo usuario
    const newUser = this.userRepository.create({
      email,
      password: hashedPassword,
      nombre,
      apellido,
    });

    // Guarda el nuevo usuario en la base de datos
    await this.userRepository.save(newUser);

    return { message: 'Usuario registrado con éxito' };
  }

  // Método para renovar el token
  async refreshToken(refreshToken: string) {
    try {
      // Verifica el refresh token
      const payload = this.jwtService.verify(refreshToken);

      // Genera un nuevo access token
      const newAccessToken = this.jwtService.sign(
        { sub: payload.sub, email: payload.email },
        { expiresIn: '15m' },
      );

      return { access_token: newAccessToken };
    } catch (error) {
      throw new UnauthorizedException('Refresh token inválido o expirado');
    }
  }
}