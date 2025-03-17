import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'perfilusuario'})
export class Perfilusuario {
  
  @PrimaryGeneratedColumn()
  idperfilusuario: number;
  
  @Column({ type: 'int' })
  idusuario: number;

  @Column({ type: 'text' })
  direccion: string;

  @Column({ type: 'varchar',length: 20 })
  telefono: string;

  @Column({ type: 'text' })
  urlusuario: string;

  @Column({ type: 'text' })
  biografia: string;

 }
