import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from "typeorm";
import { Usuario } from "../../usuarios/entities/usuario.entity";
import { Post } from "../../posts/entities/post.entity";

@Entity({ name: "likes" })
export class Like {
  @PrimaryGeneratedColumn()
  idlike: number;

  @ManyToOne(() => Post, { eager: true })
  @JoinColumn({ name: "idpost" })
  post: Post;

  @ManyToOne(() => Usuario, { eager: true })
  @JoinColumn({ name: "idusuario" })
  usuario: Usuario;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechacreacion: Date;
}
