import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { VMiembrosGrupos } from './entities/vmiembrosgrupos.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VmiembrosgruposService {
  constructor(
    @InjectRepository(VMiembrosGrupos)
    private readonly vMiembrosgruposRepository: Repository<VMiembrosGrupos>,
  ) {}

  async getAllMiembrosGrupos(): Promise<VMiembrosGrupos[]> {
    return this.vMiembrosgruposRepository.find();
  }

  async getMiembrosGruposByIdUsuario(idusuario: number): Promise<VMiembrosGrupos[]> {
    return this.vMiembrosgruposRepository.find({
      where: { idusuario }
        });
  }

}
