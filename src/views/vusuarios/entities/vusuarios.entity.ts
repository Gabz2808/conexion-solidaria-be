  import { ViewEntity, ViewColumn } from 'typeorm';
  
  @ViewEntity({ name: 'v_usuarios' })
  export class VUsuariosEntity {
    @ViewColumn()
    idperfilusuario: number;
  
    @ViewColumn()
    direccion: string;
  
    @ViewColumn()
    telefono: string;
  
    @ViewColumn()
    urlusuario: string;
  
    @ViewColumn()
    biografia: string;
  
    @ViewColumn()
    idusuario: number;
  
    @ViewColumn()
    nombre: string;
  
    @ViewColumn()
    apellido: string;
  
    @ViewColumn()
    email: string;
  
    @ViewColumn()
    password: string;
  
    @ViewColumn()
    fecharegistro: Date;
  
    @ViewColumn()
    rol: string;
    
    @ViewColumn()
    estado: string;
  }