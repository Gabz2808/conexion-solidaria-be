import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity( {name: 'categorias'})
export class Categoria {

  @PrimaryGeneratedColumn()
  idcategoria: number;

  @Column({ type: 'text', nullable: false })
  nombre: string;
}
