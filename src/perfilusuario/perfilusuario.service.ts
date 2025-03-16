import { Injectable } from '@nestjs/common';
import { CreatePerfilusuarioDto } from './dto/create-perfilusuario.dto';
import { UpdatePerfilusuarioDto } from './dto/update-perfilusuario.dto';

@Injectable()
export class PerfilusuarioService {
  create(createPerfilusuarioDto: CreatePerfilusuarioDto) {
    return 'This action adds a new perfilusuario';
  }

  findAll() {
    return `This action returns all perfilusuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} perfilusuario`;
  }

  update(id: number, updatePerfilusuarioDto: UpdatePerfilusuarioDto) {
    return `This action updates a #${id} perfilusuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} perfilusuario`;
  }
}
