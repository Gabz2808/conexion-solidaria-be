import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { VGruposEntity } from './entities/vgrupo.entity';

@Injectable()
export class VGruposService {
  constructor(
    @Inject('VGruposEntityRepository')
    private readonly vGruposRepository: Repository<VGruposEntity>,
  ) {}

  async getAllGrupos(): Promise<VGruposEntity[]> {
    return this.vGruposRepository.find();
  }
}