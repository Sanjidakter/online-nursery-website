import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
  _id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  stock: number; // Assuming each product has a stock quantity
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const item = action.payload;
      const existingItem = state.items.find(i => i._id === item._id);
      if (existingItem) {
        if (existingItem.quantity < item.stock) {
          existingItem.quantity++;
        }
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item._id !== action.payload);
    },
    updateCartItemQuantity(state, action: PayloadAction<{ _id: string; quantity: number }>) {
      const item = state.items.find(i => i._id === action.payload._id);
      if (item && action.payload.quantity <= item.stock) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
