import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const amountSlice = createSlice({
  name: "amount",
  initialState,
  reducers: {
    amount: (state, action) => void (state.value = action.payload),
  },
});

export const { amount } = amountSlice.actions;

export default amountSlice.reducer;
