import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
    message: "",
  },
  reducers: {
    setProducts(state, action) {
      // don't call the api inside the reducer : NEVER
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
  },
});

export const { setProducts, setStatus, setMessage } = productSlice.actions;
export default productSlice.reducer;

// Thunks
export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    // const prop = getState().data;
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setMessage("SUCCESS"));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      dispatch(setMessage("FAILED"));
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
