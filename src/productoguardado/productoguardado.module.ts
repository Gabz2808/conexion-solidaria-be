import { Module } from '@nestjs/common';
import { ProductoguardadoService } from './productoguardado.service';
import { ProductoguardadoController } from './productoguardado.controller';

@Module({
  controllers: [ProductoguardadoController],
  providers: [ProductoguardadoService],
})
export class ProductoguardadoModule {}
