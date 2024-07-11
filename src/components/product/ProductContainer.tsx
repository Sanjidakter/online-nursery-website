import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "@/redux/api/api";
import AddProductModal from "./AddProductModal";

// Example JSON data structure
const categories = [
  "Herbs",
  "Trees",
  "Succulents",
  "Shrubs",
  "Flowers",
  "Fruits",
];

const ProductContainer = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  // Fetch products from server
  const { data: products, isLoading, isError, refetch } = useGetProductsQuery("");

  useEffect(() => {
    refetch();
  }, [searchTerm, filter]); // Refetch data when searchTerm or filter changes

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>There was an error loading the products.</p>;
  }

  // Filter products based on search term and filter criteria
  const filteredProducts = products?.data?.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === "" || product.category === filter)
    );
  });

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddProductModal />
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border rounded-md"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border rounded-md"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl space-y-3 p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {filteredProducts?.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
