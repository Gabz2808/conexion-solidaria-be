import { Controller, Get, Param } from '@nestjs/common';
import { VmiembrosgruposService } from './vmiembrosgrupos.service';
import { VMiembrosGrupos } from './entities/vmiembrosgrupos.entity';

@Controller('v-miembrosgrupos')
export class VmiembrosgruposController {
  constructor(private readonly vmiembrosgruposService: VmiembrosgruposService) {}

  @Get()
  async getMiembrosGrupos(): Promise<VMiembrosGrupos[]> {
    return this.vmiembrosgruposService.getAllMiembrosGrupos();
  }

  @Get('id/:idusuario')
  async getMiembrosGruposByIdUsuario(@Param('idusuario') idusuario: number): Promise<VMiembrosGrupos[]> {
    return this.vmiembrosgruposService.getMiembrosGruposByIdUsuario(idusuario);
  }
}
