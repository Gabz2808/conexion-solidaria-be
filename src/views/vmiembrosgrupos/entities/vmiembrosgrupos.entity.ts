import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({ name: 'v_miembrosgrupos' })
export class VMiembrosGrupos {
  @ViewColumn()
  idmiembro: number;

  @ViewColumn()
  idgrupo: number;

  @ViewColumn()
  idusuario: number;

  @ViewColumn()
  rol: string;

  @ViewColumn()
  fechacreacion: Date;

  @ViewColumn()
  nombre: string;
  
}