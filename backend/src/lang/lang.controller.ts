import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard, SKPermissions, SKRoles } from 'src/auth/roles.guard';
import { CreateLangDTO } from './dtos/CreateLang.dto';
import { UpdateLangDTO } from './dtos/UpdateLang.dto';
import { ILang } from './interfaces/ILang.interface';
import { ILangInfo } from './interfaces/ILangInfo.interface';
import { LangService } from './lang.service';

@Controller('lang')
export class LangController {
  constructor(private readonly langService: LangService) {}

  @Get('')
  async getAllLanguages(): Promise<ILangInfo[]> {
    return this.langService.getAllLanguages();
  }

  @Get(':id')
  async getLanguage(@Param('id') id: string): Promise<ILang> {
    return this.langService.getLanguage(id);
  }

  @SKRoles(['admin'])
  @SKPermissions(['lang.create'])
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post('create')
  async createLanguage(@Body() createLangDTO: CreateLangDTO): Promise<ILang> {
    return this.langService.createLanguage(createLangDTO);
  }

  @SKRoles(['admin'])
  @SKPermissions(['lang.update'])
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Put('update/:id')
  async updateLanguage(
    @Param('id') id: string,
    @Body() updateLangDTO: UpdateLangDTO,
  ): Promise<ILang | string> {
    return this.langService.updateLanguage(id, updateLangDTO);
  }

  @SKRoles(['admin'])
  @SKPermissions(['lang.delete'])
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Delete(':id')
  async deleteLanguage(@Param('id') id: string): Promise<void> {
    this.langService.deleteLanguage(id);
  }
}
