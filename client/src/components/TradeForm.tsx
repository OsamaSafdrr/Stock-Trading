import { useState } from 'react';
import api from '../utils/api';

const TradeForm = () => {
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [type, setType] = useState('BUY');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/trades', { symbol, quantity, price, type });
      alert('Trade recorded successfully!');
      setSymbol('');
      setQuantity(0);
      setPrice(0);
      setType('BUY');
    } catch (error) {
      console.error('Error recording trade:', error);
      alert('Failed to record trade.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Symbol:</label>
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="BUY">Buy</option>
          <option value="SELL">Sell</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TradeForm;