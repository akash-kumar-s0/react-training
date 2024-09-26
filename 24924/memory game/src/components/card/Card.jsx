import React from "react";
import "./Card.css"; 

const Card = ({ id, animal, isFlipped, isSolved, onClick }) => (
  <div
    className={`h-36 flex rounded-md items-center justify-center cursor-pointer perspective`}
    onClick={() => onClick(id)}
  >
    <div
      className={`relative w-full rounded-md h-full transform-style-preserve-3d transition-transform duration-500 ease-in-out ${
        isFlipped || isSolved ? "rotate-y-180" : ""
      }`}
    >
      <div
        className={`absolute w-full rounded-md h-full backface-hidden bg-black flex items-center justify-center shadow-lg text-center text-5xl text-white`}
      >
        ?
      </div>
      <div
        className={`absolute w-full rounded-md h-full backface-hidden bg-slate-300 flex items-center justify-center shadow-lg text-center text-8xl text-black rotate-y-180`}
      >
        {animal}
      </div>
    </div>
  </div>
);

export default Card;
