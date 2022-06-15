import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateLangDTO } from './dtos/CreateLang.dto';
import { UpdateLangDTO } from './dtos/UpdateLang.dto';
import { ILang } from './interfaces/ILang.interface';
import { ILangInfo } from './interfaces/ILangInfo.interface';
import { Lang } from './schemas/Lang.schema';

@Injectable()
export class LangService {
  constructor(
    @InjectModel(Lang.name)
    private langModel: Model<Lang>,
  ) {}

  public async getAllLanguages(): Promise<ILangInfo[]> {
    return await this.langModel.find({}, { data: 0 });
  }

  public async getLanguage(id: string): Promise<ILang> {
    if (isValidObjectId(id)) {
      return await this.langModel.findById(id);
    }
    return await this.langModel.findOne({ short: id });
  }

  public async deleteLanguage(id: string): Promise<void> {
    await this.langModel.findByIdAndDelete(id);
  }

  public async createLanguage(createLangDTO: CreateLangDTO): Promise<ILang> {
    const model = await this.langModel.create({
      ...createLangDTO,
      data: {},
    });
    return await this.getLanguage(model._id);
  }

  public async updateLanguage(
    id: string,
    updateLangDTO: UpdateLangDTO,
  ): Promise<ILang | string> {
    try {
      await this.langModel.updateOne(
        { _id: id },
        { $set: { ['data.' + updateLangDTO.key]: updateLangDTO.value } },
        { upsert: true },
      );
    } catch (error) {
      return error;
    }
    return await this.getLanguage(id);
  }
}
