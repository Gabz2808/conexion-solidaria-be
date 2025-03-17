import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AmigosService } from './amigos.service';
import { AmigosController } from './amigos.controller';
import { Amigo } from './entities/amigo.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Amigo])],
  controllers: [AmigosController],
  providers: [AmigosService],
})
export class AmigosModule {}
