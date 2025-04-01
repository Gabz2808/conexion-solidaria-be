import { Module } from '@nestjs/common';
import { VGruposService } from './vgrupos.service';
import { VGruposController } from './vgrupos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VGruposEntity } from './entities/vgrupo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VGruposEntity])],
  providers: [VGruposService],
  controllers: [VGruposController]
})
export class VgruposModule {}
