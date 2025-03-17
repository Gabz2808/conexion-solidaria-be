import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity( {name: 'comentarios'})
export class Comentario { 

  @PrimaryGeneratedColumn()
  idcomentario: number;

  @Column({ type: 'int', nullable:true })
  idpost: number;
  
  @Column({ type: 'int', nullable:true })
  idhistoria: number;

  @Column({ type: 'int' })
  idusuario: number;

  @Column({ type: 'text' })
  contenido: string;

  @Column({ type: 'timestamp' })
  fechacreacion: Date;
}
