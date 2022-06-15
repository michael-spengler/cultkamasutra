import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TgbotService } from 'src/tgbot/tgbot.service';
import { IUser } from './interfaces/IUser.interface';
import { User } from './schemas/User.schema';

@Injectable()
export class UserService {
  constructor(
    private readonly tgbotService: TgbotService,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  public async signIn(iuser: IUser): Promise<User> {
    let user: User = await this.userModel.findOne({
      provider: iuser.provider,
      thirdPartyId: iuser.thirdPartyId,
    });

    if (user) {
      await this.updateUser(user._id, iuser);
      return await this.userModel.findOne({ _id: user._id });
    }

    const date = new Date().getTime();
    user = await this.userModel.create({
      ...iuser,
      date: date,
      group: 'User',
      permissions: [],
      lastLogin: date,
      completedPositions: [],
      likedPositions: [],
    });

    this.tgbotService.sendMessage(
      `Ein neuer User hat sich angemeldet!
<b>Name</b> ${user.name}`,
    );

    return user;
  }

  public async updateUser(id: string, user: IUser): Promise<void> {
    await this.userModel.updateOne(
      { _id: id },
      {
        name: user.name,
        avatar: user.avatar,
        lastLogin: new Date().getTime(),
      },
    );
  }

  public async pardonUser(id: string): Promise<void> {
    await this.userModel.findByIdAndUpdate(id, { $unset: { suspended: true } });
  }
}
