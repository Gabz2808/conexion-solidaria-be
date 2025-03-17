import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'productoguardado'})
export class Productoguardado { 

  @PrimaryGeneratedColumn()
  idpguardado: number;

  @Column({ type: 'int' })
  idusuario: number;

  @Column({ type: 'int' })
  idproducto: number;

  @Column({ type: 'timestamp' })
  fechaguardado: Date;
}
