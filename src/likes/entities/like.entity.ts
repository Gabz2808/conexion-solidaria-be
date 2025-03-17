import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'likes'})
export class Like { 
  @PrimaryGeneratedColumn()
  idlike: number;

  @Column({ type: 'int' })
  idrelacion: number;

  @Column({ type: 'int' })
  idusuario: number;

  @Column({ type: 'timestamp' })
  fechacreacion: Date;

}
