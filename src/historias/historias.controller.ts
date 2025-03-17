import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { HistoriasService } from './historias.service';
import { CreateHistoriaDto } from './dto/create-historia.dto';
import { UpdateHistoriaDto } from './dto/update-historia.dto';

@Controller('historias')
export class HistoriasController {
  constructor(private readonly historiasService: HistoriasService) {}

  @Post()
  create(@Body() createHistoriaDto: CreateHistoriaDto) {
    return this.historiasService.create(createHistoriaDto);
  }

  @Get()
  findAll() {
    return this.historiasService.findAll();
  }

@Get(':idhistoria')
  findOne(@Param('idhistoria') id: string) {
    return this.historiasService.findOne(+id);
  }

  @Patch(':idhistoria')
  update(@Param('idhistoria') id: string, @Body() updateHistoriaDto: UpdateHistoriaDto) {
    return this.historiasService.update(+id, updateHistoriaDto);
  }

  @Delete(':idhistoria')
  remove(@Param('idhistoria') id: string) {
    return this.historiasService.remove(+id);
  }

  @Put(':idhistoria')
  replace(@Param('idhistoria') id: string, @Body() updateHistoriaDto: UpdateHistoriaDto) {
    return this.historiasService.update(+id, updateHistoriaDto);
  }
}
