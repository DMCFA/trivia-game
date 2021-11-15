import { createSlice } from "@reduxjs/toolkit";

export const answerSlice = createSlice({
  name: "answer",
  initialState: "",
  reducers: {
    answer: (state, action) => (state.value = action.payload),
  },
});

export const { increment } = answerSlice.actions;

export default answerSlice.reducer;
