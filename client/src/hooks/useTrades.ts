import { useEffect, useState } from 'react';
import api from '../utils/api';
import { Trade } from '../types/trade';

const useTrades = () => {
  const [trades, setTrades] = useState<Trade[]>([]);

  useEffect(() => {
    const fetchTrades = async () => {
      try {
        const response = await api.get('/trades');
        setTrades(response.data);
      } catch (error) {
        console.error('Error fetching trades:', error);
      }
    };
    fetchTrades();
  }, []);

  return trades;
};

export default useTrades;