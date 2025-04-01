import { Module } from '@nestjs/common';
import { VusuariosService } from './vusuarios.service';
import { VusuariosController } from './vusuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VUsuariosEntity } from './entities/vusuarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VUsuariosEntity])], // Registrar la vista
  providers: [VusuariosService],
  controllers: [VusuariosController]
})
export class VusuariosModule {}
