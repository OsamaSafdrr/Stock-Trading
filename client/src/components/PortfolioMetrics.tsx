import { useEffect, useState } from 'react';
import api from '../utils/api';
import { PortfolioMetrics } from '../types/trade';

const PortfolioMetrics = () => {
  const [metrics, setMetrics] = useState<PortfolioMetrics | null>(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await api.get('/portfolio/value');
        setMetrics(response.data);
      } catch (error) {
        console.error('Error fetching portfolio metrics:', error);
      }
    };
    fetchMetrics();
  }, []);

  if (!metrics) return <div>Loading...</div>;

  return (
    <div>
      <h2>Portfolio Metrics</h2>
      {Object.entries(metrics).map(([symbol, data]) => (
        <div key={symbol}>
          <h3>{symbol}</h3>
          <p>Quantity: {data.quantity}</p>
          <p>Total Cost: ${data.totalCost.toFixed(2)}</p>
          <p>Current Value: ${data.currentValue.toFixed(2)}</p>
          <p>Profit/Loss: ${data.profitLoss.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default PortfolioMetrics;