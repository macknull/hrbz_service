import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { HerbsService } from './herbs.service';
import { CreateHerbDto } from './dto/create-herb.dto';
import { UpdateHerbDto } from './dto/update-herb.dto';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { Herb } from './schemas/herb.schema';

@ApiTags('herbs')
@Controller('herbs')
export class HerbsController {
  constructor(private readonly herbsService: HerbsService) {}

  @Post()
  create(@Body() createHerbDto: CreateHerbDto) {
    return this.herbsService.create(createHerbDto);
  }

  @Get()
  @ApiQuery({
    required: false,
    name: 'name',
    type: 'string',
  })
  findByFilter(@Query('name') name: string) {
    let res: Promise<Herb[]>;
    if (name === undefined) res = this.herbsService.findAll();
    else res = this.herbsService.findByFilter(name);
    return res;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.herbsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHerbDto: UpdateHerbDto) {
    return this.herbsService.update(id, updateHerbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.herbsService.delete(id);
  }
}
