import { Injectable } from '@nestjs/common';
import { CreateMensajesprivadoDto } from './dto/create-mensajesprivado.dto';
import { UpdateMensajesprivadoDto } from './dto/update-mensajesprivado.dto';

@Injectable()
export class MensajesprivadosService {
  create(createMensajesprivadoDto: CreateMensajesprivadoDto) {
    return 'This action adds a new mensajesprivado';
  }

  findAll() {
    return `This action returns all mensajesprivados`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mensajesprivado`;
  }

  update(id: number, updateMensajesprivadoDto: UpdateMensajesprivadoDto) {
    return `This action updates a #${id} mensajesprivado`;
  }

  remove(id: number) {
    return `This action removes a #${id} mensajesprivado`;
  }
}
