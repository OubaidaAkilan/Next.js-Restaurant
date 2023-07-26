import { createSlice } from '@reduxjs/toolkit';

//=== 1-Create a reducer
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0, // this for the number of items within cart
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
