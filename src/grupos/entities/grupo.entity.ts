import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'grupos'})
export class Grupo { 
  @PrimaryGeneratedColumn()
  idgrupo: number;

  @Column({ type: 'varchar',length: 255, nullable: false })
  nombre: string;

  @Column({ type: 'text'})
  descripcion: string;

  @Column({ type: 'int', nullable: false })
  idusuario: number;

  @Column({ type: 'timestamp' })
  fechacreacion: Date;

  @Column({ type: 'text' })
  imagen: string;


}
