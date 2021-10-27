import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/options/theme/themeSlice";
import difficultyReducer from "./features/options/difficulty/difficultySlice";
import amountReducer from "./features/options/amount/amountSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    difficulty: difficultyReducer,
    amount: amountReducer,
  },
});
