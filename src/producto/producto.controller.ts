import { Controller, Get, Body, Patch, Param, Delete, Put, Post } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post()
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.productoService.create(createProductoDto);
  }

  @Get()
  findAll() {
    return this.productoService.findAll();
  }

@Get(':idproducto')
  findOne(@Param('idproducto') id: string) {
    return this.productoService.findOne(+id);
  }

  @Patch(':idproducto')
  update(@Param('idproducto') id: string, @Body() updateProductosDto: UpdateProductoDto) {
    return this.productoService.update(+id, updateProductosDto);
  }

  @Delete(':idproducto')
  remove(@Param('idproducto') id: string) {
    return this.productoService.remove(+id);
  }

  @Put(':idproducto')
  replace(@Param('idproducto') id: string, @Body() updateProductosDto: UpdateProductoDto) {
    return this.productoService.update(+id, updateProductosDto);
  }
}
