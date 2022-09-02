import { createSlice } from "@reduxjs/toolkit";

const intitialStateValue = ''

export const catogrySlice = createSlice({
    name: 'catogry',
    initialState: { value: intitialStateValue },
    reducers: {
        catogry: (state, action) => {
            state.value = action.payload
        },
        
    }
})

export const { catogry } = catogrySlice.actions

export default catogrySlice.reducer















