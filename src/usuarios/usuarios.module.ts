import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity'; // Asegúrate de que esta sea la ruta correcta
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])], // Asegúrate de que estás importando el repositorio de Usuario aquí
  providers: [UsuariosService],
  controllers: [UsuariosController],
  exports: [TypeOrmModule], // Exporta el TypeOrmModule para que AuthModule pueda acceder al repositorio
})
export class UsuariosModule {}
