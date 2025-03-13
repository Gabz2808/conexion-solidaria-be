import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usuario' }) // Corregido el nombre de la tabla
export class Usuario {

    @PrimaryGeneratedColumn()
    idusuario: number; // Corregido el nombre de la columna

    @Column({ type: 'varchar', length: 100 }) // Corregido el tipo de dato
    nombre: string;

    @Column({ type: 'varchar', length: 100 })
    apellido: string; // Agregada la columna apellido

    @Column({ type: 'varchar', length: 255, unique: true }) // Corregido el tipo de dato y unique
    email: string;

    @Column({ type: 'text' })
    password: string;

    @Column({ type: 'timestamp without time zone' }) // Corregido el tipo de dato
    fecharegistro: Date;

    @Column({ type: 'varchar', length: 50, nullable: true }) // Corregido el tipo de dato y nullable
    rol: string;

    @Column({ type: 'varchar', length: 50, nullable: true }) // Corregido el tipo de dato y nullable
    estado: string;
}