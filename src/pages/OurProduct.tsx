import { Link } from "react-router-dom";
import { useGetProductsQuery } from "@/redux/api/api";

type TProductItem ={
  id:string,
  _id: string;
  category: string;
  title: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  stock: number;
}

const OurProduct = () => {
  const { data: products, error, isLoading } = useGetProductsQuery("");

  // console.log("Products Data:", products?.data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  // Ensure products and products.data are present
  if (!products || !products.data) {
    return <div>No products available.</div>;
  }

  return (
    <>
      <div className="py-8 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Popular Greeneries
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {products?.data?.slice(0, 6).map((productItem:TProductItem) => (
              <div
                key={productItem.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={productItem.image}
                  alt={productItem.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-medium mb-2">
                    {productItem.title}
                  </h3>
                  <p className="text-gray-700">
                    {productItem.stock > 0
                      ? "Available in stock. Hurry!"
                      : "out of stcok!"}
                  </p>
                  <Link to={`/product/${productItem._id}`}>
                    <button className="mt-4 btn btn-accent">Shop Now</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProduct;
