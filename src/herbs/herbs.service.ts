import { Injectable } from '@nestjs/common';
import { CreateHerbDto } from './dto/create-herb.dto';
import { UpdateHerbDto } from './dto/update-herb.dto';
import { Herb, HerbDocument } from './schemas/herb.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class HerbsService {
  constructor(@InjectModel(Herb.name) private herbModel: Model<HerbDocument>) {}

  async create(createHerbDto: CreateHerbDto): Promise<Herb> {
    const createdHerb = new this.herbModel(createHerbDto);
    return createdHerb.save();
  }

  async findAll(): Promise<Herb[]> {
    return this.herbModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} herb`;
  }

  update(id: number, updateHerbDto: UpdateHerbDto) {
    return `This action updates a #${id} herb`;
  }

  async delete(id: string) {
    const deletedHerb = await this.herbModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedHerb;
  }
}
