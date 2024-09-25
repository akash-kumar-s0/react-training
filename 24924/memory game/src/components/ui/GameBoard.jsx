import Card from "./Card";

const GameBoard = ({ cards, flipped, solved, onCardClick }) => (
  <div className="grid grid-cols-4 gap-4 mb-4">
    {cards.map((card) => (
      <Card
        key={card.id}
        id={card.id}
        animal={card.animal}
        isFlipped={flipped.includes(card.id)}
        isSolved={solved.includes(card.id)}
        onClick={onCardClick}
      />
    ))}
  </div>
);

export default GameBoard;