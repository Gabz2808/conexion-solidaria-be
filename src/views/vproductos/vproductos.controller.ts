import { Controller,Get } from '@nestjs/common';
import { VproductosService } from './vproductos.service';
import { VproductosEntity } from './entities/vproductos.entity';

@Controller('vproductos')
export class VproductosController {
   constructor(private readonly productosService: VproductosService) {}
  
    @Get()
    async getPosts(): Promise<VproductosEntity[]> {
      return this.productosService.getAllPosts();
    }
  



}
