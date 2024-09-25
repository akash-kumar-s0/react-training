import { configureStore } from "@reduxjs/toolkit";
import { gameSlice } from "./GameStore";

const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
  },
});

export default store;
