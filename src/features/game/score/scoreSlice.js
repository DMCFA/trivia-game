import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const questionSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    increment: (state) => void (state.value += 1),
  },
});

export const { increment } = questionSlice.actions;

export default questionSlice.reducer;
