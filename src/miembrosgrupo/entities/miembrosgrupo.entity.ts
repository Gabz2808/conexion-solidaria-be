import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Miembrosgrupo {
  @PrimaryGeneratedColumn()
  idmiembro: number;

  @Column({type: 'int'})
  idgrupo: number;

  @Column({type: 'int'})
  idusuario: number;

  @Column({ type: 'varchar',length: 50 })
  rol: string;

  @Column({ type: 'timestamp' })
  fechacreacion: Date;
}
