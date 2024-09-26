import { useDispatch, useSelector } from "react-redux";
import {
  completeLevel,
  setFlipped,
  setIsHome,
  setLevel,
  setMoves,
  setSolved,
} from "../store/GameStore";
import { useEffect } from "react";
import store from "../store/Store";

const ControlPanel = () => {
  const dispatch = useDispatch();
  const { moves, level, solved, cards } = useSelector((state) => state.game);
  const isGameComplete = solved.length === cards.length;

  const handleScore = () => {
    const totalScore = 100;
    const extraMoves = moves - (cards.length + 2);
    const finalScore = totalScore - (extraMoves < 0 ? 0 : extraMoves) * 10;
    return finalScore < 0 ? 0 : finalScore;
  };

  useEffect(() => {
    if (isGameComplete && solved.length > 0) {
      const score = handleScore();
      dispatch(completeLevel({ moves, score }));
      const completedLevel = store.getState().game.completedLevels;
      sessionStorage.setItem("completedLevels", JSON.stringify(completedLevel));
    }
  }, [isGameComplete]);

  const handleRestart = () => {
    dispatch(setFlipped([]));
    dispatch(setSolved([]));
    dispatch(setMoves(0));
  };

  const handleHome = () => {
    dispatch(setIsHome(true));
    dispatch(setLevel(null));
  };

  const handleNextLevel = () => {
    if (level < 8) {
      dispatch(setLevel(level + 1));
    }
  };

  const handlePreviousLevel = () => {
    if (level && level > 1) {
      dispatch(setLevel(level - 1));
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <p>Moves: {moves}</p>
        {isGameComplete && (
          <div className="mp-4">
            <p className="text-xl font-bold">
              Congratulations! You completed the level!
            </p>
            {level < 8 && (
              <button
                onClick={handleNextLevel}
                className="p-4 mt-3 bg-black rounded text-white"
              >
                Next Level
              </button>
            )}
          </div>
        )}
      </div>
      <div className="space-x-2">
        <button
          className="p-4 mt-3 bg-black rounded text-white"
          onClick={handleRestart}
        >
          Restart Level
        </button>
        {level > 1 && (
          <button
            className="p-4 mt-3 bg-black rounded text-white"
            onClick={handlePreviousLevel}
          >
            Previous Level
          </button>
        )}
        <button
          className="p-4 mt-3 bg-black rounded text-white"
          onClick={handleHome}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
