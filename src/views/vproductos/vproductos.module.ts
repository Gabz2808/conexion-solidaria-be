import { Module } from '@nestjs/common';
import { VproductosService } from './vproductos.service';
import { VproductosController } from './vproductos.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { VproductosEntity } from './entities/vproductos.entity';
@Module({
  imports: [TypeOrmModule.forFeature([VproductosEntity])], // Registrar la vista
  providers: [VproductosService],
  controllers: [VproductosController]
})
export class VproductosModule {}
