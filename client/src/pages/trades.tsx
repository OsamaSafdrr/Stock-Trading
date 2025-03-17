import { useEffect, useState } from 'react';
import api from '../utils/api';
import { Trade } from '../types/trade';

const TradesPage = () => {
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

  return (
    <div>
      <h1>All Trades</h1>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade) => (
            <tr key={trade.id}>
              <td>{trade.symbol}</td>
              <td>{trade.quantity}</td>
              <td>${trade.price.toFixed(2)}</td>
              <td>{trade.type}</td>
              <td>{new Date(trade.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradesPage;