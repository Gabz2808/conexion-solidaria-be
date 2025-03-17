import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
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

  @Get(':idpguardado')
    findOne(@Param('idpguardado') id: string) {
      return this.productoguardadoService.findOne(+id);
    }
  
    @Patch(':idpguardado')
    update(@Param('idpguardado') id: string, @Body() updateProductosDto: UpdateProductoguardadoDto) {
      return this.productoguardadoService.update(+id, updateProductosDto);
    }
  
    @Delete(':idpguardado')
    remove(@Param('idpguardado') id: string) {
      return this.productoguardadoService.remove(+id);
    }
  
    @Put(':idpguardado')
    replace(@Param('idpguardado') id: string, @Body() updateProductosDto: UpdateProductoguardadoDto) {
      return this.productoguardadoService.update(+id, updateProductosDto);
    }
}
