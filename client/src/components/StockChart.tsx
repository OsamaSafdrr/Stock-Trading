import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import api from '../utils/api';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StockChart = () => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/portfolio/profit-loss');
        const metrics = response.data;
        const labels = Object.keys(metrics);
        const profitLossData = labels.map((symbol) => metrics[symbol].profitLoss);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Profit/Loss',
              data: profitLossData,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };
    fetchData();
  }, []);

  if (!chartData) return <div>Loading...</div>;

  return (
    <div>
      <h2>Profit/Loss Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default StockChart;