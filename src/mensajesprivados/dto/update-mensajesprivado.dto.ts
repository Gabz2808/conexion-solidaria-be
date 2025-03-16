import { PartialType } from '@nestjs/mapped-types';
import { CreateMensajesprivadoDto } from './create-mensajesprivado.dto';

export class UpdateMensajesprivadoDto extends PartialType(CreateMensajesprivadoDto) {}
