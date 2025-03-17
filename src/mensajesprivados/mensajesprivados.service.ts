import { Injectable } from '@nestjs/common';
import { CreateMensajesprivadoDto } from './dto/create-mensajesprivado.dto';
import { UpdateMensajesprivadoDto } from './dto/update-mensajesprivado.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Mensajesprivado } from './entities/mensajesprivado.entity';

@Injectable()
export class MensajesprivadosService {

     constructor(
       @InjectRepository(Mensajesprivado)
       private readonly mensajeprivadosRepository: Repository<Mensajesprivado>) { }
  
     async create(createMensajeprivadoDto: CreateMensajesprivadoDto) {
       const mensajeprivado = this.mensajeprivadosRepository.create(createMensajeprivadoDto);
   
       return await this.mensajeprivadosRepository.save(mensajeprivado);
     }
   
     async findAll() {
       return  await this.mensajeprivadosRepository.find();
     }
   
     
     async findOne(idmprivado: number) {
       return await this.mensajeprivadosRepository.findOne({ where: { idmprivado } });
     }
   
     async update(id: number, updateMensajeprivadoDto: UpdateMensajesprivadoDto) {
       const mensajeprivado = await this.findOne(id);
       if (!mensajeprivado) {
         throw new NotFoundException('Mensajeprivado not found');
       }
       Object.assign(mensajeprivado, updateMensajeprivadoDto);
       return await this.mensajeprivadosRepository.save(mensajeprivado);
     }
   
     async remove(id: number) {
       const mensajeprivado = await this.findOne(id);
       if (!mensajeprivado) {
         throw new NotFoundException('Mensajeprivado not found');
       }
   
       return await this.mensajeprivadosRepository.remove(mensajeprivado);
     }
}
