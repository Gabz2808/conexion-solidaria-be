import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Post()
  create(@Body() createChatDto: CreateChatDto) {
    return this.chatsService.create(createChatDto);
  }

  @Get()
  findAll() {
    return this.chatsService.findAll();
  }

  @Get(':idchat')
  findOne(@Param('idchat') id: string) {
    return this.chatsService.findOne(+id);
  }

  @Get('user/:idusuario1')
  findByUser(@Param('idusuario1') idusuario1: string) {
    return this.chatsService.findByUser(+idusuario1);
  }

  @Patch(':idchat')
  update(@Param('idchat') id: string, @Body() updateChatDto: UpdateChatDto) {
    return this.chatsService.update(+id, updateChatDto);
  }

  @Delete(':idchat')
  remove(@Param('idchat') id: string) {
    return this.chatsService.remove(+id);
  }

  @Put(':idchat')
  replace(@Param('idchat') id: string, @Body() updateChatDto: UpdateChatDto) {
    return this.chatsService.update(+id, updateChatDto);
  }
}
