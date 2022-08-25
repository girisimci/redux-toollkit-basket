import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  // state tanımlamaları burada yapılır
  cartItems: cartItems,
  amount: 2,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //reducer icerisine dispatch edeceğimiz actionlar yani eventler tanımllanır.
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },

    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount +1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount -1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item)=>{
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount=amount;
      state.total=total;
    }
  },
});
//console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease,calculateTotals } = cartSlice.actions; //cartSlice icine reducer'a tanımladıgımız eventleri bu sekilde cagırırız

export default cartSlice.reducer;
