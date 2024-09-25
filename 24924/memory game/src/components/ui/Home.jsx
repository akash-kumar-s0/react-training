const HomeScreen = ({ onStartGame, completedLevels }) => (
  
  <div className="p-4">
    <h1 className="text-3xl font-bold mb-6">Animal Memory Game</h1>
    <p className="mb-4">Select a level to start the game:</p>
    <div className="grid grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((level) => (
        <button 
          key={level} 
          onClick={() => onStartGame(level)}
          className={completedLevels[level] ? 'p-4 mt-3 bg-green-500 hover:bg-green-600' : 'p-4 mt-3 bg-black rounded text-white'}
        >
          Level {level}
          {completedLevels[level] ? (
            <span className="ml-2">({completedLevels[level]} moves)</span>
          ):''}
        </button>
      ))}
    </div>
  </div>
);

export default HomeScreen;