import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';

@Controller('comentarios')
export class ComentariosController {
  constructor(private readonly comentariosService: ComentariosService) {}

  @Post()
  create(@Body() createComentarioDto: CreateComentarioDto) {
    return this.comentariosService.create(createComentarioDto);
  }

  @Get()
  findAll() {
    return this.comentariosService.findAll();
  }

@Get(':idcomentario')
  findOne(@Param('idcomentario') id: string) {
    return this.comentariosService.findOne(+id);
  }

  @Patch(':idcomentario')
  update(@Param('idcomentario') id: string, @Body() updateComentarioDto: UpdateComentarioDto) {
    return this.comentariosService.update(+id, updateComentarioDto);
  }

  @Delete(':idcomentario')
  remove(@Param('idcomentario') id: string) {
    return this.comentariosService.remove(+id);
  }

  @Put(':idcomentario')
  replace(@Param('idcomentario') id: string, @Body() updateComentarioDto: UpdateComentarioDto) {
    return this.comentariosService.update(+id, updateComentarioDto);
  }
}
