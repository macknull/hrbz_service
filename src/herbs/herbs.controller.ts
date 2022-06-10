import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HerbsService } from './herbs.service';
import { CreateHerbDto } from './dto/create-herb.dto';
import { UpdateHerbDto } from './dto/update-herb.dto';

@Controller('herbs')
export class HerbsController {
  constructor(private readonly herbsService: HerbsService) {}

  @Post()
  create(@Body() createHerbDto: CreateHerbDto) {
    return this.herbsService.create(createHerbDto);
  }

  @Get()
  findAll() {
    return this.herbsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.herbsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHerbDto: UpdateHerbDto) {
    return this.herbsService.update(+id, updateHerbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.herbsService.delete(id);
  }
}