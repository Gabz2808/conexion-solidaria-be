import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'chats'})
export class Chat { 
  @PrimaryGeneratedColumn()
  idchat: number;
  
  @Column({ type: 'int' })
  idusuario1: number;

  @Column({ type: 'int' })
  idusuario2: number;
  
  @Column({ type: 'timestamp' })
  fechacreacion: Date;

}
