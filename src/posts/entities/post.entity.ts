import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'posts'})
export class Post { 
  @PrimaryGeneratedColumn()
  idposts: number;

  @Column({ type:  'varchar', length: 255})
  titulo: string;
  
  @Column({ type: 'text' })
  contenido: string;

  @Column({ type: 'int' })
  idusuario: number;

  @Column({ type: 'timestamp' })
  fechacreacion: Date;

  @Column({ type: 'text' })
  imagen: string;

  
}
