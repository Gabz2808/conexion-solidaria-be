import { Injectable } from '@nestjs/common';
import { CreatePerfilusuarioDto } from './dto/create-perfilusuario.dto';
import { UpdatePerfilusuarioDto } from './dto/update-perfilusuario.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Perfilusuario } from './entities/perfilusuario.entity';

@Injectable()
export class PerfilusuarioService {
     constructor(
       @InjectRepository(Perfilusuario)
       private readonly perfilusuariosRepository: Repository<Perfilusuario>) { }
  
     async create(createPerfilusuarioDto: CreatePerfilusuarioDto) {
       const perfilusuario = this.perfilusuariosRepository.create(createPerfilusuarioDto);
   
       return await this.perfilusuariosRepository.save(perfilusuario);
     }
   
     async findAll() {
       return  await this.perfilusuariosRepository.find();
     }
   
     
     async findOne(idperfilusuario: number) : Promise<Perfilusuario> {
       const perfilusuario = await this.perfilusuariosRepository.findOneBy({ idperfilusuario });
        if (!perfilusuario) {
          throw new NotFoundException('Perfilusuario not found');
        }
       return perfilusuario;
     }
   
     async update(id: number, updatePerfilusuarioDto: UpdatePerfilusuarioDto) {
       const perfilusuario = await this.findOne(id);
       if (!perfilusuario) {
         throw new NotFoundException('Perfilusuario not found');
       }
       Object.assign(perfilusuario, updatePerfilusuarioDto);
       return await this.perfilusuariosRepository.save(perfilusuario);
     }
   
     async remove(id: number) {
       const perfilusuario = await this.findOne(id);
       if (!perfilusuario) {
         throw new NotFoundException('Perfilusuario not found');
       }
   
       return await this.perfilusuariosRepository.remove(perfilusuario);
     }
}
