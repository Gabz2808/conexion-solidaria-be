import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuariosService {

    constructor(
        @InjectRepository(Usuario)
        private readonly usuariosRepository: Repository<Usuario>
    ) {}

    async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
        try {
            const usuario = this.usuariosRepository.create(createUsuarioDto);
            return await this.usuariosRepository.save(usuario);
        } catch (error) {
            // Log the error or handle it appropriately
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