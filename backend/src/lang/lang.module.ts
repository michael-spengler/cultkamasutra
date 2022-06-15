import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LangController } from './lang.controller';
import { LangService } from './lang.service';
import { Lang, LangSchema } from './schemas/Lang.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Lang.name, schema: LangSchema }]),
  ],
  controllers: [LangController],
  providers: [LangService],
})
export class LangModule {}
