import { configureStore, createSlice } from "@reduxjs/toolkit";

const initState = { counter: 0, showCounter: true };

const globalCounterSlice = createSlice({
  name: "counter",
  initState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const store = createStore(globalCounterSlice.reducers);
const store = configureStore({
  reducer: globalCounterSlice.reducer,
});

export default store;
