import { PartialType } from '@nestjs/mapped-types';
import { CreateHerbDto } from './create-herb.dto';

export class UpdateHerbDto extends PartialType(CreateHerbDto) {}
