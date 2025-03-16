import { PartialType } from '@nestjs/mapped-types';
import { CreateMiembrosgrupoDto } from './create-miembrosgrupo.dto';

export class UpdateMiembrosgrupoDto extends PartialType(CreateMiembrosgrupoDto) {}
