import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Provider } from 'src/auth/provider';

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  avatar: string;

  @Prop()
  provider: Provider;

  @Prop()
  thirdPartyId: string;

  @Prop()
  date: number;

  @Prop()
  lastLogin: number;

  @Prop([String])
  permissions: string[];

  @Prop()
  group: string;

  @Prop()
  likedPositions: string[];

  @Prop()
  completedPositions: string[];

  @Prop({ required: false })
  suspended?: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
