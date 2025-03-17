import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { FavoritosService } from './favoritos.service';
import { CreateFavoritoDto } from './dto/create-favorito.dto';
import { UpdateFavoritoDto } from './dto/update-favorito.dto';

@Controller('favoritos')
export class FavoritosController {
  constructor(private readonly favoritosService: FavoritosService) {}

  @Post()
  create(@Body() createFavoritoDto: CreateFavoritoDto) {
    return this.favoritosService.create(createFavoritoDto);
  }

  @Get()
  findAll() {
    return this.favoritosService.findAll();
  }

@Get(':idfavorito')
  findOne(@Param('idfavorito') id: string) {
    return this.favoritosService.findOne(+id);
  }

  @Patch(':idfavorito')
  update(@Param('idfavorito') id: string, @Body() updateFavoritoDto: UpdateFavoritoDto) {
    return this.favoritosService.update(+id, updateFavoritoDto);
  }

  @Delete(':idfavorito')
  remove(@Param('idfavorito') id: string) {
    return this.favoritosService.remove(+id);
  }

  @Put(':idfavorito')
  replace(@Param('idfavorito') id: string, @Body() updateFavoritoDto: UpdateFavoritoDto) {
    return this.favoritosService.update(+id, updateFavoritoDto);
  }
}
