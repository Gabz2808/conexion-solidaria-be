import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

const saltRounds = 10;


@Injectable()
export class UsuariosService {

    constructor(
        @InjectRepository(Usuario)
        private readonly usuariosRepository: Repository<Usuario>
    ) {}

    async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
        try {
            // Encriptar la contraseña
            const hashedPassword = await bcrypt.hash(createUsuarioDto.password, saltRounds);
            
            // Crear el usuario con la contraseña encriptada
    const usuario = this.usuariosRepository.create({
      ...createUsuarioDto,
      estado: 'Activo',
      rol: 'Usuario',
      fecharegistro: new Date(),
      password: hashedPassword, // Almacenamos la contraseña encriptada
    });
            return await this.usuariosRepository.save(usuario);
        } catch (error) {
            // Manejo de errores
            throw error;
        }
    }

    async findAll(): Promise<Usuario[]> {
        return await this.usuariosRepository.find();
    }

    async findOne(idusuario: number): Promise<Usuario> {
        const usuario = await this.usuariosRepository.findOneBy({ idusuario });
        if (!usuario) {
            throw new NotFoundException(`Usuario with id ${idusuario} not found`);
        }
        return usuario;
    }
async findByEmail(email: string): Promise<Usuario> {
    const usuario = await this.usuariosRepository.findOneBy({ email });
    if (!usuario) {
        throw new NotFoundException(`Usuario con email ${email} no encontrado`);
    }
    return usuario;
}


    async update(idusuario: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
        const usuario = await this.findOne(idusuario); // Reuse findOne for validation
        this.usuariosRepository.merge(usuario, updateUsuarioDto);
        return await this.usuariosRepository.save(usuario);
    }

    async remove(idusuario: number): Promise<void> {
        const usuario = await this.findOne(idusuario); // Reuse findOne for validation
        await this.usuariosRepository.remove(usuario);
    }
}