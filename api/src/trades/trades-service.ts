import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTradeDto } from './dto/create-trade.dto';

@Injectable()
export class TradesService {
  constructor(private prisma: PrismaService) {}

  async createTrade(createTradeDto: CreateTradeDto) {
    return this.prisma.trade.create({
      data: createTradeDto,
    });
  }

  async getAllTrades() {
    return this.prisma.trade.findMany();
  }
}