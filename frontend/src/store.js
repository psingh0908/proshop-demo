import { configureStore } from "@reduxjs/toolkit";
import { apislice } from "./slices/apislice";
import cartSliceReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    [apislice.reducerPath] : apislice.reducer,
    cart: cartSliceReducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apislice.middleware),
  devTools: true,
  

});

export default store;
