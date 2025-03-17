import { Injectable } from '@nestjs/common';
import { CreateHistoriaDto } from './dto/create-historia.dto';
import { UpdateHistoriaDto } from './dto/update-historia.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Historia } from './entities/historia.entity';

@Injectable()
export class HistoriasService {
  constructor(
    @InjectRepository(Historia)
    private readonly historiasRepository: Repository<Historia>  ) {}
  async create(createHistoriaDto: CreateHistoriaDto) {
    const historia = this.historiasRepository.create(createHistoriaDto);

    return await this.historiasRepository.save(historia);
  }

  async findAll() {
    return  await this.historiasRepository.find();
  }

  
  async findOne(idhistoria: number) {
    return await this.historiasRepository.findOne({ where: { idhistoria } });
  }

  async update(id: number, updateHistoriaDto: UpdateHistoriaDto) {
    const historia = await this.findOne(id);
    if (!historia) {
      throw new NotFoundException('Historia not found');
    }
    Object.assign(historia, updateHistoriaDto);
    return await this.historiasRepository.save(historia);
  }

  async remove(id: number) {
    const historia = await this.findOne(id);
    if (!historia) {
      throw new NotFoundException('Historia not found');
    }

    return await this.historiasRepository.remove(historia);
  }
}
