import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TgbotModule } from 'src/tgbot/tgbot.module';
import { User, UserSchema } from './schemas/User.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    TgbotModule,
  ],
  exports: [UserService],
})
export class UserModule {}
