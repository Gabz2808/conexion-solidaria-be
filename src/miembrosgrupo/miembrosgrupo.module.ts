import { Module } from '@nestjs/common';
import { MiembrosgrupoService } from './miembrosgrupo.service';
import { MiembrosgrupoController } from './miembrosgrupo.controller';

@Module({
  controllers: [MiembrosgrupoController],
  providers: [MiembrosgrupoService],
})
export class MiembrosgrupoModule {}
