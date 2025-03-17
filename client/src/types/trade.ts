export interface Trade {
    id: number;
    symbol: string;
    quantity: number;
    price: number;
    type: string; // "BUY" or "SELL"
    createdAt: string;
  }
  
  export interface PortfolioMetrics {
    [symbol: string]: {
      quantity: number;
      totalCost: number;
      currentValue: number;
      profitLoss: number;
    };
  }