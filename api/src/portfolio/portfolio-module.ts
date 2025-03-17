import { Module } from '@nestjs/common';
import { PortfolioService } from './portfolio-service';
import { PortfolioController } from './portfolio-controller';
import { PrismaService } from '../prisma/prisma.service';
import { StockService } from '../stock/stock.service';

@Module({
  controllers: [PortfolioController],
  providers: [PortfolioService, PrismaService, StockService],
})
export class PortfolioModule {}