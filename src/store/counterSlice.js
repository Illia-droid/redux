import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    addCount(state, action) {
      state.count += action.payload.step;
    },
    subCount(state, action) {
      state.count -= action.payload.step;
    },
  },
});
export const { addCount, subCount } = counterSlice.actions;
export default counterSlice.reducer;
