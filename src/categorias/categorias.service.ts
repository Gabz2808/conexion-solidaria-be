import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { In, Repository } from 'typeorm';

import { Categoria } from './entities/categoria.entity';
@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriasRepository: Repository<Categoria>  ) {}
  async create(createCategoriaDto: CreateCategoriaDto) {
    const categoria = this.categoriasRepository.create(createCategoriaDto);

    return await this.categoriasRepository.save(categoria);
  }

  async findAll() {
    return  await this.categoriasRepository.find();
  }

  
  async findOne(idcategoria: number) {
    return await this.categoriasRepository.findOne({ where: { idcategoria } });
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    const categoria = await this.findOne(id);
    if (!categoria) {
      throw new NotFoundException('Categoria not found');
    }
    Object.assign(categoria, updateCategoriaDto);
    return await this.categoriasRepository.save(categoria);
  }

  async remove(id: number) {
    const categoria = await this.findOne(id);
    if (!categoria) {
      throw new NotFoundException('Categoria not found');
    }

    return await this.categoriasRepository.remove(categoria);
  }
}
