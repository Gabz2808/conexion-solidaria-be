import { Injectable } from '@nestjs/common';
import { CreateMiembrosgrupoDto } from './dto/create-miembrosgrupo.dto';
import { UpdateMiembrosgrupoDto } from './dto/update-miembrosgrupo.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Miembrosgrupo } from './entities/miembrosgrupo.entity';

@Injectable()
export class MiembrosgrupoService {
     constructor(
       @InjectRepository(Miembrosgrupo)
       private readonly miembrosgruposRepository: Repository<Miembrosgrupo>) { }
  
     async create(createMiembrosgrupoDto: CreateMiembrosgrupoDto) {
       const miembrosgrupo = this.miembrosgruposRepository.create(createMiembrosgrupoDto);
   
       return await this.miembrosgruposRepository.save(miembrosgrupo);
     }
   
     async findAll() {
       return  await this.miembrosgruposRepository.find();
     }
   
     
     async findOne(idmiembro: number) {
       return await this.miembrosgruposRepository.findOne({ where: { idmiembro } });
     }
   
     async update(id: number, updateMiembrosgrupoDto: UpdateMiembrosgrupoDto) {
       const miembrosgrupo = await this.findOne(id);
       if (!miembrosgrupo) {
         throw new NotFoundException('Miembrosgrupo not found');
       }
       Object.assign(miembrosgrupo, updateMiembrosgrupoDto);
       return await this.miembrosgruposRepository.save(miembrosgrupo);
     }
   
     async remove(id: number) {
       const miembrosgrupo = await this.findOne(id);
       if (!miembrosgrupo) {
         throw new NotFoundException('Miembrosgrupo not found');
       }
   
       return await this.miembrosgruposRepository.remove(miembrosgrupo);
     }
}
