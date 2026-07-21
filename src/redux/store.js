import { configureStore } from "@reduxjs/toolkit";
import hideShowReducer from "./hideShowSlide.js"

export const store = configureStore({
    reducer: {
        hide: hideShowReducer,
    }
})