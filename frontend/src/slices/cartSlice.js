import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };
//localstorage can only hold string so parsing it to make js object

const addDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

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

      //Calculating items price
      state.itemsPrice = addDecimal(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0),
      );

      //Calculating shipping price (If order above Rs100 then free, else Rs 10)
      state.shippingPrice = addDecimal(state.itemsPrice > 100 ? 0 : 10);

      //Calculating tax price (15% tax)
      item.taxPrice = addDecimal(Number((0.15 * state.itemsPrice).toFixed(2)));

      //Calculating total price
      state.totalPrice = (Number(
        state.itemsPrice + state.shippingPrice + state.taxPrice,
      )).toFixed(2);

      //saving everything in local storage
      localStorage.setItem('cart' , JSON.stringify(state))
    },
  }, // All the cart functions will go here , addtocart, remove etc
});


//In order to use this addToCart , we need to export it as an action
export const { addToCart} = cartSlice.actions;

export default cartSlice.reducer;
