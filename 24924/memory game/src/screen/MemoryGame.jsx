import { useEffect } from "react";
import GameBoard from "../components/GameBoard.jsx";
import ControlPanel from "../components/ControlPannel.jsx";
import { shuffle } from "lodash";
import animals from "../data/CardData.js";
import HomeScreen from "../components/Home.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setCards, setCompletedLevels, setFlipped, setMoves, setSolved } from "../store/GameStore.js";

const MemoryGame = () => {
  const dispatch = useDispatch();
  const { isHome, level} = useSelector((state) => state.game);

  useEffect(() => {
    const storedCompletedLevels = JSON.parse(sessionStorage.getItem('completedLevels') || '{}');
    dispatch(setCompletedLevels(storedCompletedLevels));
  }, [dispatch, isHome]);

  useEffect(() => {
    if (level !== null) {
      const cardCount = Math.min(12 + (level - 1) * 2, 24);
      const gameAnimals = shuffle(animals).slice(0, cardCount / 2);
      const gameCards = shuffle([...gameAnimals, ...gameAnimals]).map((animal, index) => ({
        id: index,
        animal: animal,
      }));
      dispatch(setCards(gameCards));
      dispatch(setFlipped([]));
      dispatch(setSolved([]));
      dispatch(setMoves(0));
    }
  }, [level, dispatch]);

  if (isHome) {
    return <HomeScreen />;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Animal Memory Game - Level {level}
      </h1>
      <GameBoard />
      <ControlPanel />
    </div>
  );
};

export default MemoryGame;
