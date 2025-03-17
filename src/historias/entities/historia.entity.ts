import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'historias'})
export class Historia { 
  @PrimaryGeneratedColumn()
  idhistoria: number;

  @Column({ type: 'varchar',length: 255 })
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
