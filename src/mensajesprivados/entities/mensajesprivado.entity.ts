import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Chat } from '../../chats/entities/chat.entity'; // Asumiendo que la entidad 'Chat' está definida correctamente
import { Usuario } from '../../usuarios/entities/usuario.entity'; // Asumiendo que la entidad 'Usuario' está definida correctamente

@Entity('mensajesprivados')
export class MensajePrivado {
  @PrimaryGeneratedColumn()
  idmprivado: number;

  @ManyToOne(() => Chat, { eager: true })
  @JoinColumn({ name: 'idchat' })
  chat: Chat;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'idusuario' })
  usuario: Usuario;

  @Column('text')
  contenido: string;

  @Column('timestamp')
  fechacreacion: Date;
}
