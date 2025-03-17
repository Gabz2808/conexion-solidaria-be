import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { GruposService } from './grupos.service';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';

@Controller('grupos')
export class GruposController {
  constructor(private readonly gruposService: GruposService) {}

  @Post()
  create(@Body() createGrupoDto: CreateGrupoDto) {
    return this.gruposService.create(createGrupoDto);
  }

  @Get()
  findAll() {
    return this.gruposService.findAll();
  }

@Get(':idgrupo')
  findOne(@Param('idgrupo') id: string) {
    return this.gruposService.findOne(+id);
  }

  @Patch(':idgrupo')
  update(@Param('idgrupo') id: string, @Body() updateGrupoDto: UpdateGrupoDto) {
    return this.gruposService.update(+id, updateGrupoDto);
  }

  @Delete(':idgrupo')
  remove(@Param('idgrupo') id: string) {
    return this.gruposService.remove(+id);
  }

  @Put(':idgrupo')
  replace(@Param('idgrupo') id: string, @Body() updateGrupoDto: UpdateGrupoDto) {
    return this.gruposService.update(+id, updateGrupoDto);
  }
}
