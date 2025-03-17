import { Module } from '@nestjs/common';
import { PerfilusuarioService } from './perfilusuario.service';
import { PerfilusuarioController } from './perfilusuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Perfilusuario } from './entities/perfilusuario.entity';

@Module({

  imports: [TypeOrmModule.forFeature([Perfilusuario])],
  controllers: [PerfilusuarioController],
  providers: [PerfilusuarioService],
})
export class PerfilusuarioModule {}
