// redux/features/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  _id: string;
  image: string;
  title: string;
  price: number;
  stock: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

// Load initial state from localStorage if available
const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cartItems') || '[]'),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ _id: string; quantity: number }>
    ) => {
      const item = state.items.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
