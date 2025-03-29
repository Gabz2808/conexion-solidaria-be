import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({ name: "v_post" })
export class VPostsEntity {
  @ViewColumn()
  idposts: number;

  @ViewColumn()
  contenido: string;

  @ViewColumn()
  fechacreacion: Date;

  @ViewColumn()
  imagen: string;

  @ViewColumn()
  author_name: string;

  @ViewColumn()
  urlusuario: string;
}
