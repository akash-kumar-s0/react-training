export const PortfolioItem = ({ stock }) => {

  const handleSell = () => {   
    //TODO:
  }

  return (
    <li className="stock-list-item" key={stock.id}>
      <div className="flex-row gap-0-5 stock-name">
        <span>{stock.name}</span>
        <span>( {stock.quantity} )</span>
      </div>
      <div>{ (stock.quantity * stock.price).toFixed(2) }</div>
      <button className="sell-button" onClick={handleSell}>Sell</button>
    </li>
  );
};
