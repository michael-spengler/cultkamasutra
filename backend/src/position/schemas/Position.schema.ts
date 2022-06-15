import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Position extends Document {
  @Prop()
  thumbnail: string;

  @Prop()
  primaryMusclesMan: string[];

  @Prop()
  primaryMusclesWoman: string[];

  @Prop()
  secondaryMusclesMan: string[];

  @Prop()
  secondaryMusclesWoman: string[];

  @Prop()
  level: number;

  @Prop()
  intimacy: number;
}

export const PositionSchema = SchemaFactory.createForClass(Position);
