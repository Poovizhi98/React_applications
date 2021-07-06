import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {state.counter++},
        decrement(state) {state.counter--},
        increase(state, action) {state.counter = state.counter + action.payload},
        toggle(state) {state.showCounter = !state.showCounter},
        isLoggedIn(state) {state.isAuthenticated = true}
    }
})

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;