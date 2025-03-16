import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MensajesprivadosService } from './mensajesprivados.service';
import { CreateMensajesprivadoDto } from './dto/create-mensajesprivado.dto';
import { UpdateMensajesprivadoDto } from './dto/update-mensajesprivado.dto';

@Controller('mensajesprivados')
export class MensajesprivadosController {
  constructor(private readonly mensajesprivadosService: MensajesprivadosService) {}

  @Post()
  create(@Body() createMensajesprivadoDto: CreateMensajesprivadoDto) {
    return this.mensajesprivadosService.create(createMensajesprivadoDto);
  }

  @Get()
  findAll() {
    return this.mensajesprivadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mensajesprivadosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMensajesprivadoDto: UpdateMensajesprivadoDto) {
    return this.mensajesprivadosService.update(+id, updateMensajesprivadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mensajesprivadosService.remove(+id);
  }
}
