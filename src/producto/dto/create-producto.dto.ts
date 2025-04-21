import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductoDto {


  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsString()
  descripcion?: string;

  @IsNotEmpty()
  precio: number;

  @IsNotEmpty()
  idcategoria: number;

  @IsString()
  imagen?: string;

  @IsNotEmpty()
  idusuario: number;

  
}
