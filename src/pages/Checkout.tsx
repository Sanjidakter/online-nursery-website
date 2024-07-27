import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { clearCart } from '@/redux/features/cartSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Checkout = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    toast.success("order placed!")
    const orderData = {
      customerName,
      phoneNumber,
      address,
      items: cartItems.map(item => ({ product: item._id, quantity: item.quantity })),
      paymentMethod,
      totalAmount: cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0),
    };

    try {
      const response = await fetch('https://nursery-db.vercel.app/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert('Order placed successfully!');
        dispatch(clearCart());
        navigate('/');
      } else {
        alert('Failed to place order.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>
      <form className='bg-slate-200 p-2'>
        <div className="mb-4 ">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="mt-1 block w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 block w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 block w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mt-1 block w-full"
          >
            <option value="COD">Cash on Delivery</option>
            <option value="Stripe">Stripe</option>
          </select>
        </div>
        <button
          type="button"
          onClick={handleCheckout}
          className="btn bg-green-300 mt-6"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
