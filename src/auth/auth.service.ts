import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';  // Importa JwtService

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario) private userRepository: Repository<Usuario>,
    private jwtService: JwtService,  // Inyecta JwtService
  ) {}

  // Método de login
  async login(loginDto: { email: string; password: string }) {
    const { email, password } = loginDto;
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      throw new Error('Contraseña incorrecta');
    }

    // Aquí generas el JWT con el usuario como payload
    const payload = { email: user.email, sub: user.idusuario };  // Puedes agregar más información al payload
    const access_token = this.jwtService.sign(payload);  // Usa JwtService para generar el token

    return { access_token };  // Devuelves el token generado
  }

  // Método de registro
  async register(registerDto: { email: string; password: string; nombre: string; apellido: string }) {
    const { email, password, nombre, apellido } = registerDto;

    // Verificar si el usuario ya existe
    const existingUser = await this.userRepository.findOne({ where: { email } });
    if (existingUser) {
      throw new Error('El correo electrónico ya está registrado');
    }

    // Encriptar la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear un nuevo usuario
    const newUser = this.userRepository.create({
      email,
      password: hashedPassword,
      nombre,
      apellido,
    });

    // Guardar el nuevo usuario en la base de datos
    await this.userRepository.save(newUser);

    return { message: 'Usuario registrado con éxito' };
  }
}
