import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Lang extends Document {
  @Prop()
  title: string;

  @Prop()
  short: string;

  @Prop()
  file: string;

  @Prop(raw({}))
  data: Record<string, any>;
}

export const LangSchema = SchemaFactory.createForClass(Lang);
