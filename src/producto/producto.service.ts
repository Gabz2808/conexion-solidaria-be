import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const producto = this.productoRepository.create(createProductoDto);
    return this.productoRepository.save(producto);
  }

  async findAll() {
    return await this.productoRepository.find();
  }

  async findOne(idproducto: number) {
    return await this.productoRepository.findOne({ where: { idproducto } });
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    const producto = await this.findOne(id);
    if (!producto) {
      throw new NotFoundException('Producto not found');
    }
    Object.assign(producto, updateProductoDto);
    return await this.productoRepository.save(producto);
  }

  async remove(id: number) {
    const producto = await this.findOne(id);
    if (!producto) {
      throw new NotFoundException('Producto not found');
    }

    return await this.productoRepository.remove(producto);
  }
}
