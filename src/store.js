import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/options/theme/themeSlice";
import difficultyReducer from "./features/options/difficulty/difficultySlice";
import amountReducer from "./features/options/amount/amountSlice";
import questionReducer from "./features/game/gameSlice";
import answerReducer from "./features/game/gameHelper/answerSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    difficulty: difficultyReducer,
    amount: amountReducer,
    question: questionReducer,
    answer: answerReducer,
  },
});
