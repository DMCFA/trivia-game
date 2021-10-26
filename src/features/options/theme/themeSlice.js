import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    theme: (state, action) => void (state.value = action.payload),
  },
});

export const { theme } = themeSlice.actions;

export default themeSlice.reducer;
