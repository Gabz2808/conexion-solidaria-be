import { Module } from '@nestjs/common';
import { MiembrosgrupoService } from './miembrosgrupo.service';
import { MiembrosgrupoController } from './miembrosgrupo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Miembrosgrupo } from './entities/miembrosgrupo.entity';

@Module({
        imports: [TypeOrmModule.forFeature([Miembrosgrupo])],
  
  controllers: [MiembrosgrupoController],
  providers: [MiembrosgrupoService],
})
export class MiembrosgrupoModule {}
