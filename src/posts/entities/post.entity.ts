import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  idposts: number;

  @Column({ type: 'text', nullable: true })
  contenido: string;

  @Column({ type: 'int' })
  idusuario: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechacreacion: Date;

  @Column({ type: 'text', nullable: true })
  imagen: string;
}