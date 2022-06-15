import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/schemas/User.schema';
import { PositionController } from './position.controller';
import { PositionService } from './position.service';
import { Position, PositionSchema } from './schemas/Position.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Position.name, schema: PositionSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  providers: [PositionService],
  controllers: [PositionController],
})
export class PositionModule {}
