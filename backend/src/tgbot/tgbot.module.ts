import { Module } from '@nestjs/common';
import { TgbotController } from './tgbot.controller';
import { TgbotService } from './tgbot.service';

@Module({
  controllers: [TgbotController],
  providers: [TgbotService],
  exports: [TgbotService],
})
export class TgbotModule {}
