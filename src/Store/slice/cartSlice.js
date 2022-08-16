import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      // redux core: tell us we can't mutated our state directly
      // return [...state,action.payload]: here we are returing a new array,we are not changing the original array
      // but inside the redux toolkit we calling createSlice method that have a feature that you directly mutated your original state
      // here createSlice method internaly following the redux principal
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
