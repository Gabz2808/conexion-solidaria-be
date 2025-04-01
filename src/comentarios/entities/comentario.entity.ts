import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Usuario } from "../../usuarios/entities/usuario.entity";

@Entity({ name: "comentarios" })
export class Comentario {
  @PrimaryGeneratedColumn()
  idcomentario: number;

  @Column({ type: "int", nullable: true })
  idpost: number;

  @Column({ type: "int", nullable: true })
  idhistoria: number;

  @Column({ type: "int", nullable: false })
  idusuario: number;

  @Column({ type: "text", nullable: false })
  contenido: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  fechacreacion: Date;

  // Relación unidireccional con Usuario
  @ManyToOne(() => Usuario)
  @JoinColumn({ name: "idusuario" }) // Vincula la columna `idusuario` con la tabla `usuarios`
  usuario: Usuario;
}