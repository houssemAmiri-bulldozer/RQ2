import { createSlice, createDraftSafeSelector } from "@reduxjs/toolkit";
import products from "../../products";

const initialState = {
  products: [],
  total: 0,
  gifts: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = products.find((p) => p.id === action.payload);
      state.products.push(product);
      state.total = state.total + +product.price;
    },
    resetCart: (state, action) => {
      state.products = [];
      state.total = 0;
    }
  }
});

const entity = (state) => state.cart.products;
const calculateTotal = (product) =>
  product.reduce((acc, curr) => {
    return +acc + +curr.price;
  }, []);
export const totalSelector = createDraftSafeSelector(entity, calculateTotal);

// Action creators are generated for each case reducer function
export const { addToCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
