import { Injectable } from '@nestjs/common';
import { CreateMiembrosgrupoDto } from './dto/create-miembrosgrupo.dto';
import { UpdateMiembrosgrupoDto } from './dto/update-miembrosgrupo.dto';

@Injectable()
export class MiembrosgrupoService {
  create(createMiembrosgrupoDto: CreateMiembrosgrupoDto) {
    return 'This action adds a new miembrosgrupo';
  }

  findAll() {
    return `This action returns all miembrosgrupo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} miembrosgrupo`;
  }

  update(id: number, updateMiembrosgrupoDto: UpdateMiembrosgrupoDto) {
    return `This action updates a #${id} miembrosgrupo`;
  }

  remove(id: number) {
    return `This action removes a #${id} miembrosgrupo`;
  }
}
