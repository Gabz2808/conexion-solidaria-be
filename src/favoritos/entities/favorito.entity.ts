import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'favoritos'})
export class Favorito { 

  @PrimaryGeneratedColumn()
  idfavorito: number;

  @Column({ type: 'text' })
  tipo: string;

  @Column({ type: 'int' })
  idrelacion: number;

  @Column({ type: 'int' })
  idusuario: number;

  @Column({ type: 'timestamp' })
  fechaguardado: Date;
}
