import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import errorReducer from "./errorSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    error: errorReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
