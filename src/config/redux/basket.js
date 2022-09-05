import { createSlice } from "@reduxjs/toolkit";

const intitialStateValue = [];

export const baskitSlice = createSlice({
  name: "baskit",
  initialState: { value: intitialStateValue },
  reducers: {
    addToBaskit: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteBaskitItem: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },
    editBaskitItem: (state, action) => {
      const editItem = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log("editabble item is  ::", state.value[editItem].quantity);
    },
  },
});

export const { addToBaskit, deleteBaskitItem, editBaskitItem } =
  baskitSlice.actions;

export default baskitSlice.reducer;
