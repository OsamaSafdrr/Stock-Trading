import { Controller, Get } from '@nestjs/common';
import { PortfolioService } from './portfolio-service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('portfolio')
@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get('value')
  @ApiOperation({ summary: 'Get portfolio value' })
  @ApiResponse({ status: 200, description: 'Portfolio value calculated.' })
  getPortfolioValue() {
    return this.portfolioService.getPortfolioValue();
  }

  @Get('profit-loss')
  @ApiOperation({ summary: 'Get profit/loss for each stock and overall portfolio' })
  @ApiResponse({ status: 200, description: 'Profit/loss calculated.' })
  getProfitLoss() {
    return this.portfolioService.getProfitLoss();
  }
}