import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.perfilusuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePerfilusuarioDto: UpdatePerfilusuarioDto) {
    return this.perfilusuarioService.update(+id, updatePerfilusuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.perfilusuarioService.remove(+id);
  }
}
