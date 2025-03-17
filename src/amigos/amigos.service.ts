import { Injectable } from '@nestjs/common';
import { CreateAmigoDto } from './dto/create-amigo.dto';
import { UpdateAmigoDto } from './dto/update-amigo.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Amigo } from './entities/amigo.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class AmigosService {
  constructor(
    @InjectRepository(Amigo)
    private readonly amigosRepository: Repository<Amigo>  ) {}
  async create(createAmigoDto: CreateAmigoDto) {
    const amigo = this.amigosRepository.create(createAmigoDto);

    return await this.amigosRepository.save(amigo);
  }

  async findAll() {
    return  await this.amigosRepository.find();
  }

  
  async findOne(idamigo: number) {
    return await this.amigosRepository.findOne({ where: { idamigo } });
  }

  async update(idamigo: number, updateAmigoDto: UpdateAmigoDto) {
    const amigo = await this.findOne(idamigo);
    if (!amigo) {
      throw new NotFoundException('Amigo not found');
    }
    Object.assign(amigo, updateAmigoDto);
    return await this.amigosRepository.save(amigo);
  }

  async remove(idamigo: number) {
    const amigo = await this.findOne(idamigo);
    if (!amigo) {
      throw new NotFoundException('Amigo not found');
    }

    return await this.amigosRepository.remove(amigo);
  }
}
