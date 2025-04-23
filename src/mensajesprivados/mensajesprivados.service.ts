import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MensajePrivado } from '../mensajesprivados/entities/mensajesprivado.entity';
import { Chat } from '../chats/entities/chat.entity';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable()
export class MensajesPrivadosService {
  constructor(
    @InjectRepository(MensajePrivado)
    private readonly mensajeRepo: Repository<MensajePrivado>,

    @InjectRepository(Chat)
    private readonly chatRepo: Repository<Chat>,

    private readonly usuariosService: UsuariosService
  ) {}

  async enviarMensaje(data: { chatId: number; mensaje: string; usuarioId: number }) {
    const chat = await this.chatRepo.findOne({ where: { idchat: data.chatId } });
    if (!chat) throw new NotFoundException('Chat no encontrado');

    const usuario = await this.usuariosService.findOne(data.usuarioId);

    const nuevoMensaje = this.mensajeRepo.create({
      chat,
      usuario,
      contenido: data.mensaje,
      fechacreacion: new Date(),
    });

    return this.mensajeRepo.save(nuevoMensaje);
  }

  async obtenerMensajes(chatId: number) {
    return this.mensajeRepo.find({
      where: { chat: { idchat: chatId } },
      relations: ['usuario', 'chat'],
      order: { fechacreacion: 'ASC' },
    });
  }
}
