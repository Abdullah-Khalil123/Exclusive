import { createSlice } from "@reduxjs/toolkit";
import { addToCart, removeFromCart } from "./cartutils";

export interface CartItem {
  id: number;
  count: number;
  color?: string;
  size?: "XS" | "S" | "M" | "L" | "XL";
}

export interface CartState {
  cartItems: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: addToCart,
    removeItem: removeFromCart,
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
