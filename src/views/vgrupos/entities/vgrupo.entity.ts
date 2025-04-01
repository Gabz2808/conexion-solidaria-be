import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({ name: "v_grupos" })
export class VGruposEntity {
  @ViewColumn()
  idgrupo: number;

  @ViewColumn()
  nombre: string;

  @ViewColumn()
  descripcion: string;

  @ViewColumn()
  idusuario: number;

  @ViewColumn()
  fechacreacion: Date;

  @ViewColumn()
  imagen: string;

  @ViewColumn()
  nombre_propietario: string;
}