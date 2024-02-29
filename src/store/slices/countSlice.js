import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        plusCount(state, action) {
            state.count++
        },
        minusCount(state, action) {
            state.count--
        },
    }
})
export const {plusCount, minusCount} = countSlice.actions

export default countSlice.reducer