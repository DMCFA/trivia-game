import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const difficultySlice = createSlice({
  name: "difficulty",
  initialState,
  reducers: {
    difficulty: (state, action) => void (state.value = action.payload),
  },
});

export const { difficulty } = difficultySlice.actions;

export default difficultySlice.reducer;
