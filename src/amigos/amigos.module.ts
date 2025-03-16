import { Module } from '@nestjs/common';
import { AmigosService } from './amigos.service';
import { AmigosController } from './amigos.controller';

@Module({
  controllers: [AmigosController],
  providers: [AmigosService],
})
export class AmigosModule {}
