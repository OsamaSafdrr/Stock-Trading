import { Controller, Get, Post, Body } from '@nestjs/common';
import { TradesService } from './trades-service';
import { CreateTradeDto } from './dto/create-trade.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('trades')
@Controller('trades')
export class TradesController {
  constructor(private readonly tradesService: TradesService) {}

  @Post()
  @ApiOperation({ summary: 'Record a new trade' })
  @ApiResponse({ status: 201, description: 'Trade successfully recorded.' })
  create(@Body() createTradeDto: CreateTradeDto) {
    return this.tradesService.createTrade(createTradeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Fetch all trades' })
  @ApiResponse({ status: 200, description: 'List of all trades.' })
  findAll() {
    return this.tradesService.getAllTrades();
  }
}