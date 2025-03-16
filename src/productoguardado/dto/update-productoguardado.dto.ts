import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoguardadoDto } from './create-productoguardado.dto';

export class UpdateProductoguardadoDto extends PartialType(CreateProductoguardadoDto) {}
