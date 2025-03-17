import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PerfilusuarioService } from './perfilusuario.service';
import { CreatePerfilusuarioDto } from './dto/create-perfilusuario.dto';
import { UpdatePerfilusuarioDto } from './dto/update-perfilusuario.dto';

@Controller('perfilusuario')
export class PerfilusuarioController {
  constructor(private readonly perfilusuarioService: PerfilusuarioService) {}

  @Post()
  create(@Body() createPerfilusuarioDto: CreatePerfilusuarioDto) {
    return this.perfilusuarioService.create(createPerfilusuarioDto);
  }

  @Get()
  findAll() {
    return this.perfilusuarioService.findAll();
  }

@Get(':idperfilusuario')
  findOne(@Param('idperfilusuario') id: string) {
    return this.perfilusuarioService.findOne(+id);
  }

  @Patch(':idperfilusuario')
  update(@Param('idperfilusuario') id: string, @Body() updatePerfilusuarioDto: UpdatePerfilusuarioDto) {
    return this.perfilusuarioService.update(+id, updatePerfilusuarioDto);
  }

  @Delete(':idperfilusuario')
  remove(@Param('idperfilusuario') id: string) {
    return this.perfilusuarioService.remove(+id);
  }

  @Put(':idperfilusuario')
  replace(@Param('idperfilusuario') id: string, @Body() updatePerfilusuarioDto: UpdatePerfilusuarioDto) {
    return this.perfilusuarioService.update(+id, updatePerfilusuarioDto);
  }
}
