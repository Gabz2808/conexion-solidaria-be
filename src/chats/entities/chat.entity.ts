// chat.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { MensajePrivado } from '../../mensajesprivados/entities/mensajesprivado.entity'; // Importa la entidad Mensaje

@Entity('chats')
export class Chat {
  @PrimaryGeneratedColumn()
  idchat: number;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'idusuario1' })
  usuario1: Usuario;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'idusuario2' })
  usuario2: Usuario;

  @Column({ type: 'timestamp' })
  fechacreacion: Date;

  // Relación con los mensajes
  @OneToMany(() => MensajePrivado, (mensaje) => mensaje.chat)
  mensajes: MensajePrivado[];
}
