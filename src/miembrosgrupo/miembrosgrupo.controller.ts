import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MiembrosgrupoService } from './miembrosgrupo.service';
import { CreateMiembrosgrupoDto } from './dto/create-miembrosgrupo.dto';
import { UpdateMiembrosgrupoDto } from './dto/update-miembrosgrupo.dto';

@Controller('miembrosgrupo')
export class MiembrosgrupoController {
  constructor(private readonly miembrosgrupoService: MiembrosgrupoService) {}

  @Post()
  create(@Body() createMiembrosgrupoDto: CreateMiembrosgrupoDto) {
    return this.miembrosgrupoService.create(createMiembrosgrupoDto);
  }

  @Get()
  findAll() {
    return this.miembrosgrupoService.findAll();
  }

@Get(':idmiembrosgrupo')
  findOne(@Param('idmiembrosgrupo') id: string) {
    return this.miembrosgrupoService.findOne(+id);
  }

  @Patch(':idmiembrosgrupo')
  update(@Param('idmiembrosgrupo') id: string, @Body() updateMiembrosgrupoDto: UpdateMiembrosgrupoDto) {
    return this.miembrosgrupoService.update(+id, updateMiembrosgrupoDto);
  }

  @Delete(':idmiembrosgrupo')
  remove(@Param('idmiembrosgrupo') id: string) {
    return this.miembrosgrupoService.remove(+id);
  }

  @Put(':idmiembrosgrupo')
  replace(@Param('idmiembrosgrupo') id: string, @Body() updateMiembrosgrupoDto: UpdateMiembrosgrupoDto) {
    return this.miembrosgrupoService.update(+id, updateMiembrosgrupoDto);
  }
}
