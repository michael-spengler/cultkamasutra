import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Lang, LangSchema } from 'src/lang/schemas/Lang.schema';
import { Position, PositionSchema } from 'src/position/schemas/Position.schema';
import { User, UserSchema } from 'src/user/schemas/User.schema';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Position.name, schema: PositionSchema },
      { name: User.name, schema: UserSchema },
      { name: Lang.name, schema: LangSchema },
    ]),
  ],
  controllers: [StatsController],
  providers: [StatsService],
})
export class StatsModule {}
