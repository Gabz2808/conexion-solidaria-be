import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Req, UnauthorizedException } from '@nestjs/common';
import { PerfilusuarioService } from './perfilusuario.service';
import { CreatePerfilusuarioDto } from './dto/create-perfilusuario.dto';
import { UpdatePerfilusuarioDto } from './dto/update-perfilusuario.dto';
import { JwtService } from '@nestjs/jwt'; // Asegúrate de tener el módulo JWT instalado
import { Request } from 'express';

@Controller('perfilusuario')
export class PerfilusuarioController {
  constructor(
    private readonly perfilusuarioService: PerfilusuarioService,
    private readonly jwtService: JwtService, // Inyectamos el servicio JWT
  ) {}

  @Post()
  create(@Body() createPerfilusuarioDto: CreatePerfilusuarioDto) {
    return this.perfilusuarioService.create(createPerfilusuarioDto);
  }

  @Get()
  findAll() {
    return this.perfilusuarioService.findAll();
  }

  // Endpoint para obtener el perfil del usuario autenticado
  @Get('me')
  async getProfile(@Req() req: Request) {
    const token = req.headers['authorization']?.split(' ')[1]; // Extraemos el token del encabezado
    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    try {
      const decoded = this.jwtService.verify(token); // Verificamos el token
      const userId = decoded.id; // Suponiendo que el JWT tiene el campo 'id' con el ID del usuario

      const perfil = await this.perfilusuarioService.findOne(userId); // Obtenemos el perfil del usuario por ID
      if (!perfil) {
        throw new UnauthorizedException('Usuario no encontrado');
      }
      return perfil;
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const perfil = await this.perfilusuarioService.findOne(+id);
    if (!perfil) {
      throw new UnauthorizedException('Perfil no encontrado');
    }
    return perfil;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePerfilusuarioDto: UpdatePerfilusuarioDto) {
    return this.perfilusuarioService.update(+id, updatePerfilusuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.perfilusuarioService.remove(+id);
  }

  @Put(':id')
  replace(@Param('id') id: string, @Body() updatePerfilusuarioDto: UpdatePerfilusuarioDto) {
    return this.perfilusuarioService.update(+id, updatePerfilusuarioDto);
  }
}
