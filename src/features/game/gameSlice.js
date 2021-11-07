import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
  name: "score",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
  },
});

export const { increment } = questionSlice.actions;

export default questionSlice.reducer;
