import { Injectable } from '@nestjs/common';
import { CreateFavoritoDto } from './dto/create-favorito.dto';
import { UpdateFavoritoDto } from './dto/update-favorito.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Favorito } from './entities/favorito.entity';

@Injectable()
export class FavoritosService {
  constructor(
    @InjectRepository(Favorito)
    private readonly favoritosRepository: Repository<Favorito>  ) {}
  async create(createFavoritoDto: CreateFavoritoDto) {
    const favorito = this.favoritosRepository.create(createFavoritoDto);

    return await this.favoritosRepository.save(favorito);
  }

  async findAll() {
    return  await this.favoritosRepository.find();
  }

  
  async findOne(idfavorito: number) {
    return await this.favoritosRepository.findOne({ where: { idfavorito } });
  }

  async update(id: number, updateFavoritoDto: UpdateFavoritoDto) {
    const favorito = await this.findOne(id);
    if (!favorito) {
      throw new NotFoundException('Favorito not found');
    }
    Object.assign(favorito, updateFavoritoDto);
    return await this.favoritosRepository.save(favorito);
  }

  async remove(id: number) {
    const favorito = await this.findOne(id);
    if (!favorito) {
      throw new NotFoundException('Favorito not found');
    }

    return await this.favoritosRepository.remove(favorito);
  }
}
