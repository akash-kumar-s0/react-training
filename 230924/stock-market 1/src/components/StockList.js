import { StockListItem } from './StockListItem';
import { STOCK_LIST } from '../store/data';

export const StockList = () => {

  return (
    <div className="flex-column gap-1">
      <h2>Stock List</h2>

      <ul className="flex-column gap-1">
        {STOCK_LIST.map((stock) => (
          <StockListItem key={stock.id} stock={stock}>
          </StockListItem>
        ))}
      </ul>
    </div>
  );
};
