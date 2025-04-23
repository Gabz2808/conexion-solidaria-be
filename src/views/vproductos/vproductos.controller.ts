import { Controller,Get, Param } from '@nestjs/common';
import { VproductosService } from './vproductos.service';
import { VproductosEntity } from './entities/vproductos.entity';

@Controller('vproductos')
export class VproductosController {
   constructor(private readonly productosService: VproductosService) {}
  
    @Get()
    async getProductos(): Promise<VproductosEntity[]> {
      return this.productosService.getAllProductos();
    }
  
@Get('id/:idvendedor')
    async getProductosByidvendedor(@Param('idvendedor') idvendedor: number): Promise<VproductosEntity[]> {
      return this.productosService.getProductosByidvendedor(idvendedor);
    }


}
