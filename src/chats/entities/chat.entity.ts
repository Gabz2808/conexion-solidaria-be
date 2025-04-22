// chat.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

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
}
