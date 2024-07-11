import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { removeFromCart, updateCartItemQuantity } from '@/redux/features/cartSlice';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    dispatch(updateCartItemQuantity({ _id: id, quantity }));
  };

  const handleCheckout = () => {
    // Implement your checkout logic here
    console.log("Proceeding to checkout with items:", cartItems);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item._id} className="flex justify-between items-center mb-4">
                <img src={item.image} alt={item.title} className="h-16 w-16 object-cover" />
                <p className="flex-1">{item.title}</p>
                <div className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    max={item.stock}
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item._id, Number(e.target.value))}
                    className="w-16 p-1 border"
                  />
                  <span className="ml-2">{item.price}$</span>
                </div>
                <Button onClick={() => handleRemove(item._id)} className="bg-red-500 ml-4">Remove</Button>
              </li>
            ))}
          </ul>
          <Button onClick={handleCheckout} className="bg-blue-500 mt-6">Proceed to Checkout</Button>
        </>
      )}
    </div>
  );
};

export default Cart;
