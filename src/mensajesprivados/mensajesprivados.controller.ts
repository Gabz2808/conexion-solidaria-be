import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { MensajesPrivadosService } from './mensajesprivados.service';

@Controller('mensajes')
export class MensajesPrivadosController {
  constructor(private readonly mensajesService: MensajesPrivadosService) {}

  @Post('sendMessage')
  async enviarMensaje(@Body() body: { chatId: number; mensaje: string; usuarioId: number }) {
    return this.mensajesService.enviarMensaje(body);
  }

  @Get('chat/:chatId')
  async obtenerMensajes(@Param('chatId') chatId: number) {
    return this.mensajesService.obtenerMensajes(chatId);
  }
}
