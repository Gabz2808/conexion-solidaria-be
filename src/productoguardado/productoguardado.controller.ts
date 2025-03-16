import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductoguardadoService } from './productoguardado.service';
import { CreateProductoguardadoDto } from './dto/create-productoguardado.dto';
import { UpdateProductoguardadoDto } from './dto/update-productoguardado.dto';

@Controller('productoguardado')
export class ProductoguardadoController {
  constructor(private readonly productoguardadoService: ProductoguardadoService) {}

  @Post()
  create(@Body() createProductoguardadoDto: CreateProductoguardadoDto) {
    return this.productoguardadoService.create(createProductoguardadoDto);
  }

  @Get()
  findAll() {
    return this.productoguardadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productoguardadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoguardadoDto: UpdateProductoguardadoDto) {
    return this.productoguardadoService.update(+id, updateProductoguardadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productoguardadoService.remove(+id);
  }
}
