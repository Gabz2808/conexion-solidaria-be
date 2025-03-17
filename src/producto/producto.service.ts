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
       private readonly productosRepository: Repository<Producto>) { }
  
     async create(createProductoDto: CreateProductoDto) {
       const producto = this.productosRepository.create(createProductoDto);
   
       return await this.productosRepository.save(producto);
     }
   
     async findAll() {
       return  await this.productosRepository.find();
     }
   
     
     async findOne(idproducto: number) {
       return await this.productosRepository.findOne({ where: { idproducto } });
     }
   
     async update(id: number, updateProductoDto: UpdateProductoDto) {
       const producto = await this.findOne(id);
       if (!producto) {
         throw new NotFoundException('Producto not found');
       }
       Object.assign(producto, updateProductoDto);
       return await this.productosRepository.save(producto);
     }
   
     async remove(id: number) {
       const producto = await this.findOne(id);
       if (!producto) {
         throw new NotFoundException('Producto not found');
       }
   
       return await this.productosRepository.remove(producto);
     }
}
