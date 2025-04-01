import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VUsuariosEntity } from './entities/vusuarios.entity';

@Injectable()
export class VusuariosService {
  constructor(
    @InjectRepository(VUsuariosEntity)
    private readonly usuariosRepository: Repository<VUsuariosEntity>,
  ) {}

  async getAllUsuarios(): Promise<VUsuariosEntity[]> {
    return this.usuariosRepository.find();
  }

  async findOne(idperfilusuario: number): Promise<VUsuariosEntity | null> {
    return this.usuariosRepository.findOne({ where: { idperfilusuario } });
  }
}
