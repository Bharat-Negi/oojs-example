// Install Redux Toolkit & React-Redux
npm install @reduxjs/toolkit react-redux

// Create a Redux Store
// Folder path src/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Create a Slice (State + Reducers)
// Folder path src/features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers :{
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -=1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    }
});
export const { increment, decrement, incrementByAmount } = counterSlice.action;

export default counterSlice.reducer;

// Wrap App with Redux Provider
// Folder path src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Use Redux State in Components
// Read State → useSelector
import { useSelector } from "react-redux";

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    return <h2>Count: {count}</h2>
}
export default Counter;

// Read State → useDispatch
import { useDispatch } from "react-redux";

import {
  increment,
  decrement,
  incrementByAmount,
} from "./features/counter/counterSlice";

const CounterButtons = () => {
    const dispatch = useDispatch();

    return(
        <>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>
                +5
            </button>
        </>
    )
}

export default CounterButtons;

