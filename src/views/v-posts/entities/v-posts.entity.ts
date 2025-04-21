import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({ name: "v_post" })
export class VPostsEntity {
  @ViewColumn()
  idpost: number;


  @ViewColumn()
  contenido: string;

  @ViewColumn()
  fecha_post: Date;

  @ViewColumn()
  imagen: string;

  @ViewColumn()
  idautor: number;

  @ViewColumn()
  autor: string;
  
  @ViewColumn()
  urlusuario: string;
  
  @ViewColumn()
  cantidad_likes: number;

  @ViewColumn()
  comentarios: Array<{
    idcomentario: number;
    contenido: string;
    fecha_comentario: string;
    autor_comentario: string;
  }>; // Ahora es un array de objetos JSON
}