import { Controller, Get, Param, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { VUsuariosEntity } from './entities/vusuarios.entity';
import { VusuariosService } from './vusuarios.service';

@Controller('vusuarios')
export class VusuariosController {
  constructor(private readonly usuariosService: VusuariosService) {}

  @Get()
  async getUsuarios(): Promise<VUsuariosEntity[]> {
    return this.usuariosService.getAllUsuarios();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<VUsuariosEntity> {
    const usuario = await this.usuariosService.findOne(id);
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return usuario;
  }
}
