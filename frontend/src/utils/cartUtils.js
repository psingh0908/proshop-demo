export const addDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  //Calculating items price
  state.itemsPrice = addDecimal(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0),
  );

  //Calculating shipping price (If order above Rs100 then free, else Rs 10)
  state.shippingPrice = addDecimal(state.itemsPrice > 100 ? 0 : 10);

  //Calculating tax price (15% tax)
  state.taxPrice = addDecimal(Number((0.15 * state.itemsPrice).toFixed(2)));

  //Calculating total price
  state.totalPrice = Number(
    state.itemsPrice + state.shippingPrice + state.taxPrice,
  ).toFixed(2);

  //saving everything in local storage
  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
