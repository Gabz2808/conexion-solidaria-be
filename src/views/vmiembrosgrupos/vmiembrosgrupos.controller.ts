import { Controller, Get } from '@nestjs/common';
import { VmiembrosgruposService } from './vmiembrosgrupos.service';
import { VMiembrosGrupos } from './entities/vmiembrosgrupos.entity';

@Controller('v-miembrosgrupos')
export class VmiembrosgruposController {
  constructor(private readonly vmiembrosgruposService: VmiembrosgruposService) {}


  @Get()
  async getMiembrosGrupos(): Promise<VMiembrosGrupos[]> 
  {
    return this.vmiembrosgruposService.getAllMiembrosGrupos();
  }
}
