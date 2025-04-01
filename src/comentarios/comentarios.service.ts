import { Injectable } from '@nestjs/common';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Comentario } from './entities/comentario.entity';

@Injectable()
export class ComentariosService {
  constructor(
    @InjectRepository(Comentario)
    private readonly comentariosRepository: Repository<Comentario>  ) {}
async create(createComentarioDto: CreateComentarioDto) {
  const comentario = this.comentariosRepository.create(createComentarioDto);
  await this.comentariosRepository.save(comentario);

  // Devuelve el comentario con los datos del usuario
  return this.comentariosRepository.findOne({
    where: { idcomentario: comentario.idcomentario },
    relations: ["usuario"], // Incluye la relación con el usuario
  });
}
  async findAll() {
    return  await this.comentariosRepository.find();
  }

  
  async findOne(idcomentario: number) {
    return await this.comentariosRepository.findOne({ where: { idcomentario } });
  }

  async update(id: number, updateComentarioDto: UpdateComentarioDto) {
    const comentario = await this.findOne(id);
    if (!comentario) {
      throw new NotFoundException('Comentario not found');
    }
    Object.assign(comentario, updateComentarioDto);
    return await this.comentariosRepository.save(comentario);
  }

  async remove(id: number) {
    const comentario = await this.findOne(id);
    if (!comentario) {
      throw new NotFoundException('Comentario not found');
    }

    return await this.comentariosRepository.remove(comentario);
  }
}
