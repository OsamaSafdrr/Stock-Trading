import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { StockService } from '../stock/stock.service';

@Injectable()
export class PortfolioService {
  constructor(
    private prisma: PrismaService,
    private stockService: StockService,
  ) {}

  async getPortfolioValue() {
    const trades = await this.prisma.trade.findMany();
    const portfolio = {};

    for (const trade of trades) {
      if (!portfolio[trade.symbol]) {
        portfolio[trade.symbol] = { quantity: 0, totalCost: 0 };
      }
      if (trade.type === 'BUY') {
        portfolio[trade.symbol].quantity += trade.quantity;
        portfolio[trade.symbol].totalCost += trade.quantity * trade.price;
      } else if (trade.type === 'SELL') {
        portfolio[trade.symbol].quantity -= trade.quantity;
        portfolio[trade.symbol].totalCost -= trade.quantity * trade.price;
      }
    }

    // Fetch latest prices and calculate current value
    for (const symbol of Object.keys(portfolio)) {
      const latestPrice = await this.stockService.getLatestPrice(symbol);
      portfolio[symbol].currentValue =
        portfolio[symbol].quantity * latestPrice;
      portfolio[symbol].latestPrice = latestPrice;
    }

    return portfolio;
  }

  async getProfitLoss() {
    const portfolio = await this.getPortfolioValue();
    const profitLoss = {};

    for (const symbol of Object.keys(portfolio)) {
      const currentValue = portfolio[symbol].currentValue;
      const totalCost = portfolio[symbol].totalCost;
      profitLoss[symbol] = {
        profitLoss: currentValue - totalCost,
        currentValue,
        totalCost,
        latestPrice: portfolio[symbol].latestPrice,
      };
    }

    return profitLoss;
  }
}