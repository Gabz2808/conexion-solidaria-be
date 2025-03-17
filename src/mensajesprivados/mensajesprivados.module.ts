import { Module } from '@nestjs/common';
import { MensajesprivadosService } from './mensajesprivados.service';
import { MensajesprivadosController } from './mensajesprivados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mensajesprivado } from './entities/mensajesprivado.entity';

@Module({
      imports: [TypeOrmModule.forFeature([Mensajesprivado])],
  
  controllers: [MensajesprivadosController],
  providers: [MensajesprivadosService],
})
export class MensajesprivadosModule {}
