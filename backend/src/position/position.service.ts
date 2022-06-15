import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from 'src/user/interfaces/IUser.interface';
import { User } from 'src/user/schemas/User.schema';
import { CreatePositionDTO } from './dtos/CreatePosition.dto';
import { PositionSearchOptionsDTO } from './dtos/PositionSearchOptions.dto';
import { UpdatePositionDTO } from './dtos/UpdatePosition.dto';
import { IPosition } from './interfaces/IPosition.interface';
import { Position } from './schemas/Position.schema';

@Injectable()
export class PositionService {
  constructor(
    @InjectModel(Position.name)
    private positionModel: Model<Position>,
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  public async getAllPositions(): Promise<IPosition[]> {
    return await this.positionModel.find();
  }

  public async getPositionsByMuscle(muscle: string): Promise<string[]> {
    const reg = new RegExp(`${muscle}`, 'i');
    const muscles = [
      { primaryMusclesMan: { $all: [reg] } },
      { secondaryMusclesMan: { $all: [reg] } },
      { primaryMusclesWoman: { $all: [reg] } },
      { secondaryMusclesWoman: { $all: [reg] } },
    ];
    return (await this.positionModel.find({ $or: muscles }).limit(20)).map(
      (x) => x._id,
    );
  }

  public async createPosition(options: CreatePositionDTO): Promise<IPosition> {
    if (!options) return;
    if (
      [options.thumbnail, options].filter((x) => ('' + x).length === 0)
        .length !== 0
    ) {
      return;
    }
    if (
      options.primaryMusclesMan.length === 0 ||
      options.primaryMusclesWoman.length === 0 ||
      options.secondaryMusclesMan.length === 0 ||
      options.secondaryMusclesWoman.length === 0
    ) {
      return;
    }
    return await this.positionModel.create({
      ...options,
    });
  }

  public async deletePosition(id: string): Promise<void> {
    await this.positionModel.deleteOne({ _id: id });
  }

  public async updatePosition(
    id: string,
    options: UpdatePositionDTO,
  ): Promise<IPosition> {
    await this.positionModel.findById(id).updateOne({ $set: { ...options } });
    return await this.positionModel.findById(id);
  }

  public async findPositions(
    men: boolean,
    options: PositionSearchOptionsDTO,
  ): Promise<IPosition[]> {
    const reg = new RegExp(`${options.input}`, 'i');
    const muscles = [];
    if (men) {
      muscles.push(
        { primaryMusclesMan: { $all: [reg] } },
        { secondaryMusclesMan: { $all: [reg] } },
      );
    } else {
      muscles.push(
        { primaryMusclesWoman: { $all: [reg] } },
        { secondaryMusclesWoman: { $all: [reg] } },
      );
    }
    return await this.positionModel.find({ $or: muscles });
  }

  public async getLiked(user: IUser): Promise<string[]> {
    return (await this.userModel.findById(user._id)).likedPositions;
  }
  public async addLike(id: string, user: IUser): Promise<void> {
    await this.userModel.updateOne(
      { _id: user._id },
      { $addToSet: { likedPositions: id } },
      { upsert: true },
    );
  }
  public async removeLike(id: string, user: IUser): Promise<void> {
    await this.userModel.updateOne(
      { _id: user._id },
      { $pull: { likedPositions: id } },
      { upsert: true },
    );
  }

  public async getCompleted(user: IUser): Promise<string[]> {
    return (await this.userModel.findById(user._id)).completedPositions;
  }

  public async addCompleted(id: string, user: IUser): Promise<void> {
    await this.userModel.updateOne(
      { _id: user._id },
      { $addToSet: { completedPositions: id } },
      { upsert: true },
    );
  }

  public async removeCompleted(id: string, user: IUser): Promise<void> {
    await this.userModel.updateOne(
      { _id: user._id },
      { $pull: { completedPositions: id } },
      { upsert: true },
    );
  }

  public async getTrendingPositions(): Promise<string[]> {
    const models = await this.userModel.find({}, { likedPositions: 1 });
    const ids: string[] = [];
    models.forEach((x) => ids.push(...x.likedPositions));
    const unique: string[] = [...new Set(ids)];

    return unique
      .map((x) => {
        return {
          _id: x,
          amount: ids.reduce((a, v) => (v === x ? a + 1 : a), 0),
        };
      })
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 25)
      .map((x) => x._id);
  }
}
