import { STOCK_LIST } from "../store/data";
import { PortfolioItem } from "./PortfolioItem";

export const Portfolio = () => {

  return (
    <div className="flex-column gap-1">
      <h2>Portfolio</h2>

      <ul className="flex-column gap-1">
        <PortfolioItem stock={{...STOCK_LIST[0], quantity: 2}}/>
      </ul>
    </div>
  );
};
