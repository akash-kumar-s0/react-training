import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeLevel, setFlipped, setIsHome, setLevel, setMoves, setSolved } from "../store/GameStore";
import store from "../store/Store";
import { Player } from "@lottiefiles/react-lottie-player";
import crackerAnimation from '../animation/cracker.json';

const ControlPanel = () => {
  const dispatch = useDispatch();
  const { moves, level, solved, cards } = useSelector((state) => state.game);
  const isGameComplete = solved.length === cards.length;
  
  const [showCongratsModal, setShowCongratsModal] = useState(false);

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
      setShowCongratsModal(true); 
    }
  }, [isGameComplete]);

  const handleRestart = () => {
    dispatch(setFlipped([]));
    dispatch(setSolved([]));
    dispatch(setMoves(0));
    setShowCongratsModal(false); 
  };

  const handleHome = () => {
    dispatch(setIsHome(true));
    dispatch(setLevel(null));
  };

  const handleNextLevel = () => {
    if (level < 8) {
      dispatch(setLevel(level + 1));
    }
    setShowCongratsModal(false); 
  };

  const handlePreviousLevel = () => {
    if (level && level > 1) {
      dispatch(setLevel(level - 1));
    }
    setShowCongratsModal(false); 
  };

  return (
    <div className="space-y-4">
      <div>
        <p>Moves: {moves}</p>
        {isGameComplete && (
          <div className="mp-4">
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

      {showCongratsModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-20 rounded shadow-lg text-center">
            <Player
              autoplay
              loop
              src={crackerAnimation} 
              style={{ height: "200px", width: "200px" }}
            />
            <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
            <p>You have completed the level!</p>
            <div className="mt-4 space-x-2">
              {level < 8 && (
                <button
                  onClick={handleNextLevel}
                  className="p-4 bg-green-500 rounded text-white"
                >
                  Next Level
                </button>
              )}
              <button
                onClick={() => setShowCongratsModal(false)}
                className="p-4 bg-blue-500 rounded text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ControlPanel;
