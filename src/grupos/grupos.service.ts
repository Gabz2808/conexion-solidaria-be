import { Injectable } from '@nestjs/common';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Grupo } from './entities/grupo.entity';

@Injectable()
export class GruposService {
  constructor(
    @InjectRepository(Grupo)
    private readonly gruposRepository: Repository<Grupo>  ) {}
  async create(createGrupoDto: CreateGrupoDto) {
    const grupo = this.gruposRepository.create(createGrupoDto);

    return await this.gruposRepository.save(grupo);
  }

  async findAll() {
    return  await this.gruposRepository.find();
  }

  
  async findOne(idgrupo: number) {
    return await this.gruposRepository.findOne({ where: { idgrupo } });
  }

  async update(id: number, updateGrupoDto: UpdateGrupoDto) {
    const grupo = await this.findOne(id);
    if (!grupo) {
      throw new NotFoundException('Grupo not found');
    }
    Object.assign(grupo, updateGrupoDto);
    return await this.gruposRepository.save(grupo);
  }

  async remove(id: number) {
    const grupo = await this.findOne(id);
    if (!grupo) {
      throw new NotFoundException('Grupo not found');
    }

    return await this.gruposRepository.remove(grupo);
  }
}
