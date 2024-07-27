import { useParams } from "react-router-dom";
import { useGetProductsByIdQuery } from "@/redux/api/api";
import { useAppDispatch } from "@/redux/hook";
import { useState } from "react";
import { addToCart } from "@/redux/features/cartSlice";
import toast from "react-hot-toast";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>(); // Fetch the product ID from URL params
  // Use a fallback ID or empty string if id is undefined
  const productId = id || "";
  const { data: product, error, isLoading } = useGetProductsByIdQuery(productId); // Fetch product details by ID
  const dispatch = useAppDispatch();

  const [quantity, setQuantity] = useState(1);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    const fetchBaseQueryError = error as FetchBaseQueryError;
    const serializedError = error as SerializedError;

    if (fetchBaseQueryError.status) {
      return <div>Error: {fetchBaseQueryError.status} - {JSON.stringify(fetchBaseQueryError.data)}</div>;
    } else if (serializedError.message) {
      return <div>Error: {serializedError.message}</div>;
    } else {
      return <div>An unknown error occurred.</div>;
    }
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  const handleAddToCart = () => {
    if (product?.data?.stock > 0 && quantity <= product?.data?.stock) {
      dispatch(
        addToCart({
          _id: product.data._id,
          title: product.data.title,
          price: product.data.price,
          image: product.data.image,
          stock: product.data.stock,
          quantity,
        })
      );
      toast.success("Product added to cart!");
    } else {
      toast.error(
        "Product is out of stock or quantity exceeds available stock"
      );
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={product?.data?.image}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{product?.data?.title}</h1>
          <h1 className="text-2xl font-semibold">{product?.data?.category}</h1>
          <h2 className="font-bold">{product?.data?.price}$</h2>
          <p className="py-6">{product?.data?.description}</p>
          <div className="flex items-center">
            <label htmlFor="quantity" className="mr-2">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              max={product?.data?.stock}
              className="border p-1"
            />
          </div>
          <button onClick={handleAddToCart} className="btn bg-green-400">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
