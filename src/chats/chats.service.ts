import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Chat } from './entities/chat.entity';

@Injectable()
export class ChatsService {
  constructor(
    @InjectRepository(Chat)
    private readonly chatsRepository: Repository<Chat>  ) {}
  async create(createChatDto: CreateChatDto) {
    const chat = this.chatsRepository.create(createChatDto);

    return await this.chatsRepository.save(chat);
  }

  async findAll() {
    return  await this.chatsRepository.find();
  }

  
  async findOne(idchat: number) {
    return await this.chatsRepository.findOne({ where: { idchat } });
  }

  async update(id: number, updateChatDto: UpdateChatDto) {
    const chat = await this.findOne(id);
    if (!chat) {
      throw new NotFoundException('Chat not found');
    }
    Object.assign(chat, updateChatDto);
    return await this.chatsRepository.save(chat);
  }

  async remove(id: number) {
    const chat = await this.findOne(id);
    if (!chat) {
      throw new NotFoundException('Chat not found');
    }

    return await this.chatsRepository.remove(chat);
  }
}
