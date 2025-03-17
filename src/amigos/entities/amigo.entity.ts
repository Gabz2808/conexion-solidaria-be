import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity( { name: 'amigos' })
export class Amigo { 
  
  @PrimaryGeneratedColumn()
  idamigo: number;

  @Column({type: 'int', nullable : false })
  idusuario1: number;

  @Column({ type: 'int', nullable: false })
  idusuario2: number;

  @Column({ type: 'text', name: 'estado' })
  estado: string;
  
  @Column({ type: 'timestamp' })
  fechasolicitud: Date;


}
