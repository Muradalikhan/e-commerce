import { createSlice } from "@reduxjs/toolkit";

const intitialStateValue = false

export const showCartSlice = createSlice({
    name: 'showCart',
    initialState: { value: intitialStateValue, counter: 0 },
    reducers: {
        showCart: (state, action) => {
            state.value = action.payload
        },
        incCartCounter: (state,) => {
            state.counter = state.counter + 1
        },
        decCartCounter: (state,) => {
            state.counter = state.counter - 1
        }
    }
})

export const { showCart, incCartCounter,decCartCounter } = showCartSlice.actions

export default showCartSlice.reducer















