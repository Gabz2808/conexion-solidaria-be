import { Injectable } from '@nestjs/common';
import { CreateProductoguardadoDto } from './dto/create-productoguardado.dto';
import { UpdateProductoguardadoDto } from './dto/update-productoguardado.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Productoguardado } from './entities/productoguardado.entity';

@Injectable()
export class ProductoguardadoService {
     constructor(
       @InjectRepository(Productoguardado)
       private readonly productosRepository: Repository<Productoguardado>) { }
  
     async create(createProductoDto: CreateProductoguardadoDto) {
       const producto = this.productosRepository.create(createProductoDto);
   
       return await this.productosRepository.save(producto);
     }
   
     async findAll() {
       return  await this.productosRepository.find();
     }
   
     
     async findOne(idpguardado: number) {
       return await this.productosRepository.findOne({ where: { idpguardado } });
     }
   
     async update(id: number, updateProductoDto: UpdateProductoguardadoDto) {
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
