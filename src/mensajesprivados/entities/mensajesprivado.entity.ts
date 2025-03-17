import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'mensajesprivados'})
export class Mensajesprivado { 
  
  @PrimaryGeneratedColumn()
  idmprivado: number;

  @Column({ type: 'int' })
  idchat: number;

  @Column({ type: 'int' })
  idusuario: number;

  @Column({ type: 'text' })
  contenido: string;

  @Column({ type: 'timestamp' })
  fechacreacion: Date;
  
}
