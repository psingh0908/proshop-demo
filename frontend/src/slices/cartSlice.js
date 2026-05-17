import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };
//localstorage can only hold string so parsing it to make js object

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x,
        );
      } else {
        state.cartItems = [...state.cartItems, item]; // We are not using array.push here as state is immutable, so we are just making a copy of it and adding the item to it
      }

      return updateCart(state);
    },

    removeFromCart : (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload );

      return updateCart(state);
    }
  }, // All the cart functions will go here , addtocart, remove etc
});


//In order to use this addToCart , we need to export it as an action
export const { addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
