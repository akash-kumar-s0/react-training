import { useEffect, useState } from "react";
import GameBoard from "./ui/GameBoard";
import ControlPanel from "./ui/ControlPannel";
import { shuffle } from "lodash";
import animals from "./CardData.js";
import HomeScreen from "./ui/Home.jsx";

const MemoryGame = () => {
  const [cards, setCards] = useState([1]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [level, setLevel] = useState(null);
  const [moves, setMoves] = useState(0);
  const [isHome, setIsHome] = useState(true);
  const [completedLevels, setCompletedLevels] = useState({});

  useEffect(() => {
    const storedCompletedLevels = JSON.parse(sessionStorage.getItem('completedLevels') || '{}');
    setCompletedLevels(storedCompletedLevels);
  }, []);

  useEffect(() => {
    if (level !== null) {
      initializeGame();
    }
  }, [level]);

  const initializeGame = () => {
    const cardCount = Math.min(12 + (level - 1) * 2, 24);
    const gameAnimals = shuffle(animals).slice(0, cardCount / 2);
    const gameCards = shuffle([...gameAnimals, ...gameAnimals]).map((animal, index) => ({
      id: index,
      animal: animal,
    }));
    setCards(gameCards);
    setFlipped([]);
    setSolved([]);
    setMoves(0);
    setIsHome(false);
  };

  const handleCardClick = (id) => {
    if (flipped.length === 2 || flipped.includes(id) || solved.includes(id)) return;

    const newFlipped = [...flipped, id];
    // console.log(newFlipped);
    
    setFlipped(newFlipped);
    setMoves(moves + 1);

    if (newFlipped.length === 2) {
      const [firstId, secondId] = newFlipped;
      if (cards[firstId].animal === cards[secondId].animal) {
        setSolved([...solved, firstId, secondId]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  };

  const handleStartGame = (selectedLevel) => {
    setLevel(selectedLevel);
  };

  const handleNextLevel = () => {
    if (level < 8) {
      setLevel(level + 1);
    }
  };

  const handleHome = () => {
    setIsHome(true);
    setLevel(null);
  };

  const handlePreviousLevel = () => {
    if (level > 1) {
      setLevel(level - 1);
    }
  };

  const isGameComplete = solved.length === cards.length;

  useEffect(() => {
    if (isGameComplete) {
      const newCompletedLevels = {
        ...completedLevels,
        [level]: completedLevels[level] ? Math.min(completedLevels[level], moves) : moves
      };
      setCompletedLevels(newCompletedLevels);
      sessionStorage.setItem('completedLevels', JSON.stringify(newCompletedLevels));
    }
  }, [isGameComplete]);

  if (isHome) {
    return <HomeScreen onStartGame={handleStartGame} completedLevels={completedLevels} />;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Animal Memory Game - Level {level}</h1>
      <GameBoard 
        cards={cards} 
        flipped={flipped} 
        solved={solved} 
        onCardClick={handleCardClick} 
      />
      <ControlPanel 
        moves={moves}
        isGameComplete={isGameComplete}
        level={level}
        onNextLevel={handleNextLevel}
        onRestart={initializeGame}
        onHome={handleHome}
        onPreviousLevel={handlePreviousLevel}
      />
    </div>
  );
};

export default MemoryGame;