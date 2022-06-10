import { ApiProperty } from '@nestjs/swagger';

export class CreateHerbDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  latin_name: string;

  @ApiProperty()
  description: string;
}
