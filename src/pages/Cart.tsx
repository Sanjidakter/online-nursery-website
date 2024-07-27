import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { removeFromCart, updateCartItemQuantity } from '@/redux/features/cartSlice';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    dispatch(updateCartItemQuantity({ _id: id, quantity }));
  };

  const handleCheckout = () => {
    toast.success('Proceeding...');
    navigate('/checkout'); 
  };

  // Calculate total price for all items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className='text-center font-bold bg-slate-100 p-4'>Your cart is empty.</p>
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
                  <span className="ml-2">{item.quantity * item.price}$</span> {/* Total price for this item */}
                </div>
                <Button onClick={() => handleRemove(item._id)} className="bg-red-500 ml-4">Remove</Button>
              </li>
            ))}
          </ul>
          <div className="mt-6 ">
            <h3 className="text-xl font-bold">Total Price: {totalPrice}$</h3>
          </div>
          <Button onClick={handleCheckout} className="bg-blue-500 mt-6">Proceed to Checkout</Button>
        </>
      )}
    </div>
  );
};

export default Cart;
