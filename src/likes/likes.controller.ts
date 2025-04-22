import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post()
  create(@Body() createLikeDto: CreateLikeDto) {
    return this.likesService.create(createLikeDto);
  }

  @Get()
  findAll() {
    return this.likesService.findAll();
  }

  @Get(':idlike')
  findOne(@Param('idlike') id: string) {
    return this.likesService.findOne(+id);
  }

  @Patch(':idlike')
  update(@Param('idlike') id: string, @Body() updateLikeDto: UpdateLikeDto) {
    return this.likesService.update(+id, updateLikeDto);
  }

  @Put(':idlike')
  replace(@Param('idlike') id: string, @Body() updateLikeDto: UpdateLikeDto) {
    return this.likesService.update(+id, updateLikeDto);
  }

  @Delete(':idlike')
  remove(@Param('idlike') id: string) {
    return this.likesService.remove(+id);
  }

  // Endpoint para toggleLike
  @Post('toggle')
  toggle(@Query('idpost') idpost: string, @Query('idusuario') idusuario: string) {
    return this.likesService.toggleLike(+idpost, +idusuario);
  }
}
