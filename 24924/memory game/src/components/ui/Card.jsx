const Card = ({ id, animal, isFlipped, isSolved, onClick }) => (
  <div
    className={`h-24 flex items-center justify-center cursor-pointer ${
      isFlipped || isSolved ? "bg-blue-200" : "bg-black"
    }`}
    onClick={() => onClick(id)}
  >
    <div
      className={`text-center ${
        isFlipped || isSolved ? "text-black" : "text-white"
      } `}
    >
      {isFlipped || isSolved ? animal : "?"}
    </div>
  </div>
);

export default Card;
