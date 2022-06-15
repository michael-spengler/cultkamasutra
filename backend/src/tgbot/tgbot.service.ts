import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';

@Injectable()
export class TgbotService {
  private bot = process.env.IGNORE_BOT
    ? undefined
    : new TelegramBot(process.env.TG_BOT_TOKEN, { polling: true });
  private CHAT_ID = -439254079;

  public sendMessage(message: string): void {
    if (this.bot)
      // eslint-disable-next-line @typescript-eslint/camelcase
      this.bot.sendMessage(this.CHAT_ID, message, { parse_mode: 'HTML' });
  }

  /**
   * sends a url message to the admin group
   * @param message message
   * @param label button label underneath the message
   * @param url url inserted into the button
   */
  public sendURLMessage(message: string, label: string, url: string): void {
    if (this.bot)
      this.bot.sendMessage(this.CHAT_ID, message, {
        // eslint-disable-next-line @typescript-eslint/camelcase
        parse_mode: 'HTML',
        // eslint-disable-next-line @typescript-eslint/camelcase
        reply_markup: JSON.stringify({
          // eslint-disable-next-line @typescript-eslint/camelcase
          inline_keyboard: [[{ text: label, url: url }]],
        }),
      });
  }
}
