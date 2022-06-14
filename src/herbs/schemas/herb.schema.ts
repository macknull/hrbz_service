import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HerbDocument = Herb & Document;

@Schema()
export class Herb {
  @Prop({ required: true })
  name: string;

  @Prop()
  latin_name: string;

  @Prop()
  description: string;

  @Prop()
  img: string;
}

export const HerbSchema = SchemaFactory.createForClass(Herb);
