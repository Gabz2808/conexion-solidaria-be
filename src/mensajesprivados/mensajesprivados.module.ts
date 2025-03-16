import { Module } from '@nestjs/common';
import { MensajesprivadosService } from './mensajesprivados.service';
import { MensajesprivadosController } from './mensajesprivados.controller';

@Module({
  controllers: [MensajesprivadosController],
  providers: [MensajesprivadosService],
})
export class MensajesprivadosModule {}
