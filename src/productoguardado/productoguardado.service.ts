import { Injectable } from '@nestjs/common';
import { CreateProductoguardadoDto } from './dto/create-productoguardado.dto';
import { UpdateProductoguardadoDto } from './dto/update-productoguardado.dto';

@Injectable()
export class ProductoguardadoService {
  create(createProductoguardadoDto: CreateProductoguardadoDto) {
    return 'This action adds a new productoguardado';
  }

  findAll() {
    return `This action returns all productoguardado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productoguardado`;
  }

  update(id: number, updateProductoguardadoDto: UpdateProductoguardadoDto) {
    return `This action updates a #${id} productoguardado`;
  }

  remove(id: number) {
    return `This action removes a #${id} productoguardado`;
  }
}
