import { Module } from '@nestjs/common';
import { HistoriasService } from './historias.service';
import { HistoriasController } from './historias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Historia } from './entities/historia.entity';
@Module({
  
  imports: [TypeOrmModule.forFeature([Historia])],
  controllers: [HistoriasController],
  providers: [HistoriasService],
})
export class HistoriasModule {}
