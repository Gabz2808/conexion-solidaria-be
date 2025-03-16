export class CreateComentarioDto {
  idcomentario: number;
  idpost: number;
  idhistoria: number;
  idusuario: number;
  contenido: string;
  fechaCreacion: Date;
}
