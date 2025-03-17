import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'notificaciones'})
export class Notificacione { 

  @PrimaryGeneratedColumn()
  idnotificaciones: number;

  @Column({ type: 'int' })
  idusuario: number;

  @Column({ type: 'text' })
  contenido: string;

  @Column({ type: 'boolean' })
  leido: boolean;

  @Column({ type: 'timestamp' })
  fechacreacion: Date;
  
}
