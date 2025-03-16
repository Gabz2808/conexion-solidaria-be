import { PartialType } from '@nestjs/mapped-types';
import { CreatePerfilusuarioDto } from './create-perfilusuario.dto';

export class UpdatePerfilusuarioDto extends PartialType(CreatePerfilusuarioDto) {}
