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
import { IUser } from 'src/user/interfaces/IUser.interface';
import SKUser from 'src/user/user.decorator';
import { CreatePositionDTO } from './dtos/CreatePosition.dto';
import { PositionSearchOptionsDTO } from './dtos/PositionSearchOptions.dto';
import { UpdatePositionDTO } from './dtos/UpdatePosition.dto';
import { IPosition } from './interfaces/IPosition.interface';
import { PositionService } from './position.service';

@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Get('all')
  async getAllPositions(): Promise<IPosition[]> {
    return this.positionService.getAllPositions();
  }

  @Get('muscle/:muscle')
  async getPositionsByMuscle(
    @Param('muscle') muscle: string,
  ): Promise<string[]> {
    return this.positionService.getPositionsByMuscle(muscle);
  }

  @Post('search/men')
  async searchPositionsMen(
    @Body() options: PositionSearchOptionsDTO,
  ): Promise<IPosition[]> {
    return this.positionService.findPositions(true, options);
  }

  @Post('search/women')
  async searchPositionsWomen(
    @Body() options: PositionSearchOptionsDTO,
  ): Promise<IPosition[]> {
    return this.positionService.findPositions(false, options);
  }

  @SKRoles(['admin'])
  @SKPermissions(['position.create'])
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post('create')
  async createPosition(@Body() options: CreatePositionDTO): Promise<IPosition> {
    return this.positionService.createPosition(options);
  }

  @SKRoles(['admin'])
  @SKPermissions(['position.delete'])
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Delete('delete/:id')
  async deletePosition(@Param('id') id: string): Promise<void> {
    this.positionService.deletePosition(id);
  }

  // @SKRoles(['admin'])
  // @SKPermissions(['position.update'])
  // @UseGuards(AuthGuard('jwt'), RolesGuard)
  // @Put('update/:id')
  // async updatePosition(
  //   @Param('id') id: string,
  //   @Body() options: UpdatePositionDTO,
  // ): Promise<IPosition> {
  //   return this.positionService.updatePosition(id, options);
  // }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('liked')
  async getLiked(@SKUser() user: IUser): Promise<string[]> {
    return this.positionService.getLiked(user);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post('like/:id')
  async likePosition(
    @Param('id') id: string,
    @SKUser() user: IUser,
  ): Promise<void> {
    this.positionService.addLike(id, user);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Delete('like/:id')
  async unlikePosition(
    @Param('id') id: string,
    @SKUser() user: IUser,
  ): Promise<void> {
    this.positionService.removeLike(id, user);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('completed')
  async getCompleted(@SKUser() user: IUser): Promise<string[]> {
    return this.positionService.getCompleted(user);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post('complete/:id')
  async completePosition(
    @Param('id') id: string,
    @SKUser() user: IUser,
  ): Promise<void> {
    this.positionService.addCompleted(id, user);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Delete('complete/:id')
  async uncompletePosition(
    @Param('id') id: string,
    @SKUser() user: IUser,
  ): Promise<void> {
    this.positionService.removeCompleted(id, user);
  }

  @Get('trending')
  async getTrendingPositions(): Promise<string[]> {
    return this.positionService.getTrendingPositions();
  }
}
