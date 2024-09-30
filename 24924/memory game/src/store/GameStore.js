import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    cards: [],
    flipped: [],
    solved: [],
    level: null,
    moves: 0,
    isHome: true,
    completedLevels: {},
    score: 0,
  },
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    setFlipped: (state, action) => {
      state.flipped = action.payload;
    },
    setSolved: (state, action) => {
      state.solved = action.payload;
    },
    setLevel: (state, action) => {
      state.level = action.payload;
    },
    setMoves: (state, action) => {
      state.moves = action.payload;
    },
    setIsHome: (state, action) => {
      state.isHome = action.payload;
    },
    setCompletedLevels: (state, action) => {
      state.completedLevels = action.payload;
      let totalScore = 0;
      Object.entries(state.completedLevels).forEach((value) => {
        totalScore += value?.[1][1];
      });
      state.score = totalScore;
    },
    completeLevel: (state, action) => {
      const level = state.level;
      const moves = action.payload?.moves;
      const score = action.payload?.score;
      const minMoves = state.completedLevels[level]
        ? Math.min(state.completedLevels[level][0], moves)
        : moves;
      const maxScore = state.completedLevels[level]
        ? Math.max(state.completedLevels[level][1], score)
        : score;
      state.completedLevels[level] = [minMoves, maxScore];
      state.solved = []
    },
  },
});

export const {
  setCards,
  setFlipped,
  setSolved,
  setLevel,
  setMoves,
  setIsHome,
  setCompletedLevels,
  completeLevel,
} = gameSlice.actions;
