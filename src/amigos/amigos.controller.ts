import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AmigosService } from './amigos.service';
import { CreateAmigoDto } from './dto/create-amigo.dto';
import { UpdateAmigoDto } from './dto/update-amigo.dto';

@Controller('amigos')
export class AmigosController {
  constructor(private readonly amigosService: AmigosService) {}

  @Post()
  create(@Body() createAmigoDto: CreateAmigoDto) {
    return this.amigosService.create(createAmigoDto);
  }

  @Get()
  findAll() {
    return this.amigosService.findAll();
  }

  @Get(':idamigo')
  findOne(@Param('idamigo') id: string) {
    return this.amigosService.findOne(+id);
  }

  @Patch(':idamigo')
  update(@Param('idamigo') id: string, @Body() updateAmigoDto: UpdateAmigoDto) {
    return this.amigosService.update(+id, updateAmigoDto);
  }

  @Delete(':idamigo')
  remove(@Param('idamigo') id: string) {
    return this.amigosService.remove(+id);
  }

  @Put(':idamigo') // Agregado el método PUT
  replace(@Param('idamigo') id: string, @Body() updateAmigoDto: UpdateAmigoDto) {
    return this.amigosService.update(+id, updateAmigoDto);
  }
}