import { Controller, Get } from '@nestjs/common';
import { VGruposEntity } from './entities/vgrupo.entity';
import { VGruposService } from './vgrupos.service';

@Controller('v-grupos')
export class VGruposController {
  constructor(private readonly gruposService: VGruposService) { }
  

  @Get()
  async getGrupos(): Promise<VGruposEntity[]>
  {
    return this.gruposService.getAllGrupos();
}
}