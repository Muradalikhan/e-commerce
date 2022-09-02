import { createSlice } from "@reduxjs/toolkit";

const intitialStateValue = [];

export const baskitSlice = createSlice({
  name: "baskit",
  initialState: { value: intitialStateValue },
  reducers: {
    baskitItem: (state, action) => {
      state.value =action.payload;
    },
    deleteBaskitItem: (state, action) => {
     state.value= state.value.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { baskitItem, deleteBaskitItem } = baskitSlice.actions;

export default baskitSlice.reducer;
