import { configureStore } from '@reduxjs/toolkit';

//=== 2-Create store
import cartReducer from './cartSlice.js';

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});

//=== 3-Wrap the app using provider component from redux and pass the store to it
