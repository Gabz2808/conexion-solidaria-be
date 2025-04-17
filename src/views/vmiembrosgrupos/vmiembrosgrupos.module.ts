import { Module } from '@nestjs/common';
import { VmiembrosgruposService } from './vmiembrosgrupos.service';
import { VmiembrosgruposController } from './vmiembrosgrupos.controller';
import { VMiembrosGrupos } from './entities/vmiembrosgrupos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VMiembrosGrupos])],
  controllers: [VmiembrosgruposController],
  providers: [VmiembrosgruposService],
})
export class VmiembrosgruposModule {}
