import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Provider } from 'src/auth/provider';
import { Lang } from 'src/lang/schemas/Lang.schema';
import { Position } from 'src/position/schemas/Position.schema';
import { User } from 'src/user/schemas/User.schema';

@Injectable()
export class StatsService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Lang.name) private langModel: Model<Lang>,
    @InjectModel(Position.name) private positionModel: Model<Position>,
  ) {}

  public async getStats(): Promise<any> {
    const aMonth = 1000 * 60 * 60 * 24 * 30;
    const totalUsers = await this.userModel.countDocuments();
    const totalLangs = await this.langModel.countDocuments();
    const totalPositions = await this.positionModel.countDocuments();
    const totalUserLastMonth = await this.userModel
      .find({ lastLogin: { $gt: new Date().getTime() - aMonth } })
      .countDocuments();
    const providerGoogle = await this.userModel
      .find({ provider: Provider.GOOGLE })
      .countDocuments();
    const providerApple = await this.userModel
      .find({ provider: Provider.APPLE })
      .countDocuments();

    return {
      sums: {
        'User (total)': totalUsers,
        'User (last month)': totalUserLastMonth,
        Positions: totalPositions,
        Languages: totalLangs,
      },
      login: {
        Google: {
          total: providerGoogle,
          perc: providerGoogle / totalUsers,
        },
        Apple: {
          total: providerApple,
          perc: providerApple / totalUsers,
        },
      },
    };
  }
}
