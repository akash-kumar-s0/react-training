import { useDispatch, useSelector } from "react-redux";
import { setIsHome, setLevel } from "../store/GameStore";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { score, completedLevels } = useSelector((state) => state.game);

  const handleStartGame = (selectedLevel) => {
    dispatch(setLevel(selectedLevel));
    dispatch(setIsHome(false));
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Animal Memory Game</h1>
      <h6>Total Score: {score} / 800</h6>
      <p className="mb-4">Select a level to start the game:</p>
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((level) => (
          <button
            key={level}
            onClick={() => handleStartGame(level)}
            className={
              completedLevels[level]
                ? "p-4 mt-3 bg-green-500 hover:bg-green-600"
                : "p-4 mt-3 bg-black rounded text-white"
            }
          >
            Level {level}
            {completedLevels[level] ? (
              <div className="">
                <span className="ml-2">
                  ({completedLevels[level][0]} moves)
                </span>
                <span className="ml-2">
                  ({completedLevels[level][1]} / 100)
                </span>
              </div>
            ) : (
              ""
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
