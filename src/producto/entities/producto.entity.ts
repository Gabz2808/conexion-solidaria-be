import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn()
  idproducto: number;

  @Column({ nullable: false })
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ type: 'decimal', nullable: false })
  precio: number;

  @Column({ nullable: false })
  idcategoria: number;

  @Column({ nullable: true })
  imagen: string;

  @Column({ nullable: false })
  idusuario: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechacreacion: Date;
}