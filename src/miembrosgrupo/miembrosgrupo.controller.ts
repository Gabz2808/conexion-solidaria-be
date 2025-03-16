import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.miembrosgrupoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMiembrosgrupoDto: UpdateMiembrosgrupoDto) {
    return this.miembrosgrupoService.update(+id, updateMiembrosgrupoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.miembrosgrupoService.remove(+id);
  }
}
