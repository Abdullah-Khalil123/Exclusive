import { CartItem, CartState } from "./cartSlice";
import { PayloadAction } from "@reduxjs/toolkit";

export function addToCart(state: CartState, action: PayloadAction<CartItem>) {
  // Add a New Item To Cart
  state.cartItems.push(action.payload);
}

export function removeFromCart(
  state: CartState,
  action: PayloadAction<CartItem>
) {
  state.cartItems = state.cartItems.filter((item) => item !== action.payload);
}
