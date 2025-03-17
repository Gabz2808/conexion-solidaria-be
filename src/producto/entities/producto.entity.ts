import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'productos'})
export class Producto { 
 
  @PrimaryGeneratedColumn()
  idproducto: number;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  precio: number;

  @Column({ type: 'int' })
  idcategoria: number;

  @Column({ type: 'text' })
  imagen: string;

  @Column({ type: 'int' })
  idusuario: number;

  @Column({ type: 'timestamp' })
  fechacreacion: Date;
  
}
