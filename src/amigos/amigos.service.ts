import { Injectable } from '@nestjs/common';
import { CreateAmigoDto } from './dto/create-amigo.dto';
import { UpdateAmigoDto } from './dto/update-amigo.dto';

@Injectable()
export class AmigosService {
  create(createAmigoDto: CreateAmigoDto) {
    return 'This action adds a new amigo';
  }

  findAll() {
    return `This action returns all amigos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} amigo`;
  }

  update(id: number, updateAmigoDto: UpdateAmigoDto) {
    return `This action updates a #${id} amigo`;
  }

  remove(id: number) {
    return `This action removes a #${id} amigo`;
  }
}
