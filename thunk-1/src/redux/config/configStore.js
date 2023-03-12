import { configureStore } from "@reduxjs/toolkit";
import counter from "../modules/counterSlice";

const store = configureStore({
    reducer: {
        counter: counter,
    },
});

export default store;