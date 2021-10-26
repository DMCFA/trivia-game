import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/options/theme/themeSlice";
import difficultyReducer from "./features/options/theme/difficultySlice";
import amountReducer from "./features/options/theme/amountSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    difficulty: difficultyReducer,
    amount: amountReducer,
  },
});
