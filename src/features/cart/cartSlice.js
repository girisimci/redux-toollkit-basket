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
  reducers: { //reducer icerisine dispatch edeceğimiz actionlar yani eventler tanımllanır.
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state,action) =>{
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item)=>
      item.id !== itemId);
    }
  },
});
//console.log(cartSlice);

export const { clearCart,removeItem } = cartSlice.actions; //cartSlice icine reducer'a tanımladıgımız eventleri bu sekilde cagırırız

export default cartSlice.reducer;
