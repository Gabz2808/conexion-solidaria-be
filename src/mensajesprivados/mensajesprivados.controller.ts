import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
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

@Get(':idmensajeprivado')
  findOne(@Param('idmensajeprivado') id: string) {
    return this.mensajesprivadosService.findOne(+id);
  }

  @Patch(':idmensajeprivado')
  update(@Param('idmensajeprivado') id: string, @Body() updateMensajeprivadoDto: UpdateMensajesprivadoDto) {
    return this.mensajesprivadosService.update(+id, updateMensajeprivadoDto);
  }

  @Delete(':idmensajeprivado')
  remove(@Param('idmensajeprivado') id: string) {
    return this.mensajesprivadosService.remove(+id);
  }

  @Put(':idmensajeprivado')
  replace(@Param('idmensajeprivado') id: string, @Body() updateMensajeprivadoDto: UpdateMensajesprivadoDto) {
    return this.mensajesprivadosService.update(+id, updateMensajeprivadoDto);
  }
}
