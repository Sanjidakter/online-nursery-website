import React from 'react';
import { useParams } from 'react-router-dom';
import {  useGetProductsByIdQuery } from '@/redux/api/api';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>(); // Fetch the product ID from URL params
  const { data: product, error, isLoading } = useGetProductsByIdQuery(id); // Fetch product details by ID

  console.log("Product Data:", product);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  const handleAddToCart = () => {
    if (product?.stock > 0) {
      dispatch(addToCart({ _id, title, price, image, stock }));
    } else {
      alert("Product is out of stock");
    }
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row">
      <img
        src={product?.image}
        className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">{product.title}</h1>
        <h1 className='text-2xl font-semibold'>{product.category}</h1>
        <h2 className='font-bold'>{product.price}$</h2>
        <p className="py-6">
          {product.description}
        </p>
        <button onClick={handleAddToCart} className="btn bg-green-400">Buy</button>
      </div>
    </div>
  </div>
  );
};

export default ProductDetails;
