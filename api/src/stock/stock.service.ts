import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class StockService {
  private readonly apiKey: string;
  private readonly baseUrl = 'https://www.alphavantage.co/query';

  constructor(private configService: ConfigService) {
    this.apiKey = this.configService.get<string>('ALPHA_VANTAGE_API_KEY');
  }

  async getLatestPrice(symbol: string): Promise<number> {
    try {
      const response = await axios.get(this.baseUrl, {
        params: {
          function: 'GLOBAL_QUOTE',
          symbol: symbol,
          apikey: this.apiKey,
        },
      });
      return parseFloat(response.data['Global Quote']['05. price']);
    } catch (error) {
      console.error('Error fetching stock price:', error);
      throw new Error('Failed to fetch stock price');
    }
  }
}