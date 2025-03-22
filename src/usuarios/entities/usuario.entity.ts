import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  idusuario: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  apellido: string;

  @Column({ unique: true, length: 255 })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn({ type: 'timestamp' })
  fecharegistro: Date;

  @Column({ length: 50, nullable: true })
  rol: string;

  @Column({ length: 50, nullable: true })
  estado: string;
}
