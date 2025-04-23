import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajesPrivadosController } from './mensajesprivados.controller';
import { MensajesPrivadosService } from './mensajesprivados.service';
import { MensajePrivado } from './entities/mensajesprivado.entity';
import { Chat } from '../chats/entities/chat.entity';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { UsuariosService } from '../usuarios/usuarios.service';

@Module({
  imports: [TypeOrmModule.forFeature([MensajePrivado, Chat, Usuario])],
  controllers: [MensajesPrivadosController],
  providers: [MensajesPrivadosService, UsuariosService],
})
export class MensajesPrivadosModule {}
