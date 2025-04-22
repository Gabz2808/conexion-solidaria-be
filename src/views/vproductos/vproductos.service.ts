import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { VproductosEntity } from './entities/vproductos.entity';

@Injectable()
export class VproductosService {
      constructor(
      @InjectRepository(VproductosEntity)
      private readonly productoRepository: Repository<VproductosEntity>,
    ) {}
  
    async getAllProductos(): Promise<VproductosEntity[]> {
      return this.productoRepository.find();
    }

    async getProductosByidvendedor(idvendedor: number): Promise<VproductosEntity[]> {
          return this.productoRepository.find({
            where: { idvendedor: idvendedor}
          });
        }
    }
