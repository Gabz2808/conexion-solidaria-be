import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  afterInit(server: Server) {
    console.log('WebSocket server initialized');
  }

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  // Cliente se une a una sala (por idchat)
  @SubscribeMessage('joinChat')
  handleJoinChat(@MessageBody() chatId: number, @ConnectedSocket() client: Socket) {
    client.join(`chat-${chatId}`);
    client.emit('joinedChat', `Joined chat room ${chatId}`);
  }

  // Cliente envía un mensaje
  @SubscribeMessage('sendMessage')
  handleSendMessage(
    @MessageBody() payload: { chatId: number; mensaje: string; usuarioId: number },
    @ConnectedSocket() client: Socket,
  ) {
    const { chatId, mensaje, usuarioId } = payload;

    // Emitimos a todos en la sala
    client.to(`chat-${chatId}`).emit('newMessage', {
      mensaje,
      usuarioId,
      timestamp: new Date(),
    });

    // Opcional: guardar en BD...
  }
}
