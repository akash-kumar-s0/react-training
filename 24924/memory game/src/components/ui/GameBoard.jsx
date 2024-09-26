import { useDispatch, useSelector } from "react-redux";
import { setFlipped, setMoves, setSolved } from "../../store/GameStore";
import Card from "./Card";

const GameBoard = () => {

  const dispatch = useDispatch();
  const { cards, flipped, solved, moves } = useSelector((state) => state.game);

  const handleCardClick = (id) => {
    if (flipped.length === 2 || flipped.includes(id) || solved.includes(id)) return;

    const newFlipped = [...flipped, id];
    dispatch(setFlipped(newFlipped));
    dispatch(setMoves(moves + 1));

    if (newFlipped.length === 2) {
      const [firstId, secondId] = newFlipped;
      if (cards[firstId].animal === cards[secondId].animal) {
        dispatch(setSolved([...solved, firstId, secondId]));
      }
      setTimeout(() => dispatch(setFlipped([])), 1000);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          animal={card.animal}
          isFlipped={flipped.includes(card.id)}
          isSolved={solved.includes(card.id)}
          onClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default GameBoard;
