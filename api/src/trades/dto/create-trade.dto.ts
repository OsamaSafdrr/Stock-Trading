export class CreateTradeDto {
    symbol: string;
    quantity: number;
    price: number;
    type: string; // "BUY" or "SELL"
  }