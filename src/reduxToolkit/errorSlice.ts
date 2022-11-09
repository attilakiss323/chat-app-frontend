import { createSlice } from "@reduxjs/toolkit";

export interface ErrorSate {
  message?: string;
}

const initialState: ErrorSate = {
  message: undefined,
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state, data) => {
      state.message = data.payload.error;
    },
  },
});

export const { setError } = errorSlice.actions;

export default errorSlice.reducer;
