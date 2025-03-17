import { createContext, useContext, useState, ReactNode } from 'react';
import { Trade } from '../types/trade';

interface TradeContextType {
  trades: Trade[];
  addTrade: (trade: Trade) => void;
}

const TradeContext = createContext<TradeContextType | undefined>(undefined);

export const TradeProvider = ({ children }: { children: ReactNode }) => {
  const [trades, setTrades] = useState<Trade[]>([]);

  const addTrade = (trade: Trade) => {
    setTrades((prevTrades) => [...prevTrades, trade]);
  };

  return (
    <TradeContext.Provider value={{ trades, addTrade }}>
      {children}
    </TradeContext.Provider>
  );
};

export const useTrades = () => {
  const context = useContext(TradeContext);
  if (!context) {
    throw new Error('useTrades must be used within a TradeProvider');
  }
  return context;
};