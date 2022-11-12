import { configureStore } from "@reduxjs/toolkit";
import userReducer, { UserType } from "./userSlice";
import errorReducer, { ErrorType } from "./errorSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    error: errorReducer,
  },
});

export type AppStateType = { error: ErrorType; user: UserType };

export type AppDispatch = typeof store.dispatch;
