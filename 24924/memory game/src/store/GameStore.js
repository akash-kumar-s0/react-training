import { createSlice } from '@reduxjs/toolkit'

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
    },
    completeLevel: (state, action) => {
      const level = state.level;
      const moves = action.payload;
      state.completedLevels[level] = state.completedLevels[level]
        ? Math.min(state.completedLevels[level], moves)
        : moves;
    },
  },
});

export const { setCards, setFlipped, setSolved, setLevel, setMoves, setIsHome, setCompletedLevels, completeLevel } = gameSlice.actions;