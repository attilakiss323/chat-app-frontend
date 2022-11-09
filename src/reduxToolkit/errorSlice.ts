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
      console.log("data", data);
      state = data.payload;
    },
  },
});

export const { setError } = errorSlice.actions;

export default errorSlice.reducer;
