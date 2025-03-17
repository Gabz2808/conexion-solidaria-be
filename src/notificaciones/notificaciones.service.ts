import { Injectable } from '@nestjs/common';
import { CreateNotificacioneDto } from './dto/create-notificacione.dto';
import { UpdateNotificacioneDto } from './dto/update-notificacione.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Notificacione } from './entities/notificacione.entity';

@Injectable()
export class NotificacionesService {

     constructor(
       @InjectRepository(Notificacione)
       private readonly notificacionesRepository: Repository<Notificacione>) { }
  
     async create(createNotificacioneDto: CreateNotificacioneDto) {
       const notificacione = this.notificacionesRepository.create(createNotificacioneDto);
   
       return await this.notificacionesRepository.save(notificacione);
     }
   
     async findAll() {
       return  await this.notificacionesRepository.find();
     }
   
     
     async findOne(idnotificaciones: number) {
       return await this.notificacionesRepository.findOne({ where: { idnotificaciones } });
     }
   
     async update(id: number, updateNotificacioneDto: UpdateNotificacioneDto) {
       const notificacione = await this.findOne(id);
       if (!notificacione) {
         throw new NotFoundException('Notificacione not found');
       }
       Object.assign(notificacione, updateNotificacioneDto);
       return await this.notificacionesRepository.save(notificacione);
     }
   
     async remove(id: number) {
       const notificacione = await this.findOne(id);
       if (!notificacione) {
         throw new NotFoundException('Notificacione not found');
       }
   
       return await this.notificacionesRepository.remove(notificacione);
     }
}
