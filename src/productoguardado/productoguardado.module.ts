import { Module } from '@nestjs/common';
import { ProductoguardadoService } from './productoguardado.service';
import { ProductoguardadoController } from './productoguardado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Productoguardado } from './entities/productoguardado.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Productoguardado])],
  
  controllers: [ProductoguardadoController],
  providers: [ProductoguardadoService],
})
export class ProductoguardadoModule {}
