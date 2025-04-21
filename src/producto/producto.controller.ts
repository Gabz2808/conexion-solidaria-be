
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { randomUUID } from 'crypto';
import { bucket } from '../firebase';

import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
 Get, Param, Patch, Delete, Put } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('productos')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}
  @Post()
  @UseInterceptors(FileInterceptor('imagen')) // Maneja el archivo enviado como "imagen"
  async createProducto(
    @UploadedFile() file: Express.Multer.File,
    @Body() createProductoDto: CreateProductoDto,
  ) {
    try {

    let imageUrl: string | null = null;
    if(file){
      const fileName   = `${Date.now()}-${file.originalname}`;
      const destination = `${createProductoDto.idusuario}/productos/${fileName}`;
      const fileUpload = bucket.file(destination);
      const token = randomUUID();

      await fileUpload.save(file.buffer, {
        metadata: {
          contentType: file.mimetype,
          metadata: {
            firebaseStorageDownloadTokens: token,
          },
        },
      });
      const encodedPath = encodeURIComponent(destination);
      imageUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodedPath}?alt=media&token=${token}`;
    }

      const producto = {
       ...createProductoDto,
        fechacreacion: new Date().toISOString(), 
        imagen: imageUrl ?? undefined,
      };

      console.log('Producto creado:', producto);

      return this.productoService.create(producto); // Llama al servicio para crear el producto
    } catch (error) {
      console.error('Error al crear el producto:', error);
      throw error;
    } 
  }



  @Get()
  findAll(): Promise<any[]> {
    return this.productoService.findAll();
  }

  @Get(':idproducto')
  findOne(@Param('idproducto') id: string): Promise<any> {
    return this.productoService.findOne(+id);
  }

  @Patch(':idproducto')
  update(@Param('idproducto') id: string, @Body() updateProductosDto: UpdateProductoDto): Promise<any> {
    return this.productoService.update(+id, updateProductosDto);
  }

  @Delete(':idproducto')
  remove(@Param('idproducto') id: string): Promise<any> {
    return this.productoService.remove(+id);
  }

  @Put(':idproducto')
  replace(@Param('idproducto') id: string, @Body() updateProductosDto: UpdateProductoDto): Promise<any> {
    return this.productoService.update(+id, updateProductosDto);
  }
}
