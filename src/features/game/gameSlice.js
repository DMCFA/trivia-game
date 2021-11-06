import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  question: null,
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: (state, action) => void (state.value = action.payload),
});

export const { question } = questionSlice.actions;

export default questionSlice.reducer;
