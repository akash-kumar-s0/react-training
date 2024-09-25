const ControlPanel = ({
  moves,
  isGameComplete,
  level,
  onNextLevel,
  onRestart,
  onHome,
  onPreviousLevel,
}) => (
  <div className="space-y-4">
    <div>
      <p>Moves: {moves}</p>
      {isGameComplete && (
        <div className="mp-4">
          <p className="text-xl font-bold">
            Congratulations! You completed the level!
          </p>
          {level < 8 && (
            <button onClick={onNextLevel} className="p-4 mt-3 bg-black rounded text-white">
              Next Level
            </button>
          )}
        </div>
      )}
    </div>
    <div className="space-x-2">
      <button
        className="p-4 mt-3 bg-black rounded text-white"
        onClick={onRestart}
      >
        Restart Level
      </button>
      {level > 1 && (
        <button
          className="p-4 mt-3 bg-black rounded text-white"
          onClick={onPreviousLevel}
        >
          Previous Level
        </button>
      )}
      <button className="p-4 mt-3 bg-black rounded text-white" onClick={onHome}>
        Go to Home
      </button>
    </div>
  </div>
);

export default ControlPanel;
