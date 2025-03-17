import TradeForm from '../components/TradeForm';
import PortfolioMetrics from '../components/PortfolioMetrics';
import StockChart from '../components/StockChart';

export default function Home() {
  return (
    <div>
      <h1>Stock Trading Portfolio</h1>
      <TradeForm />
      <PortfolioMetrics />
      <StockChart />
    </div>
  );
}