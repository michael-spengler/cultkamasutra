import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard, SKPermissions, SKRoles } from 'src/auth/roles.guard';
import { StatsService } from './stats.service';

@Controller('stats')
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @SKRoles(['admin'])
  @SKPermissions(['stats.view'])
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('')
  async getStats(): Promise<any> {
    return this.statsService.getStats();
  }
}
