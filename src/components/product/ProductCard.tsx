import{ useState } from "react";
import { Button } from "../ui/button";
import {
  useDeleteProductMutation,
  // useUpdateProductMutation,
} from "@/redux/api/api";
import UpdateProductModal from "./UpdateProductModal";
import { Link } from "react-router-dom";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

type TProductCardProps = {
  _id: string;
  category: string;
  title: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  stock: number;
};

const ProductCard = ({
  title,
  _id,
  image,
  price,
  category,
  description,
  rating,
  stock,
}: TProductCardProps) => {
  // const dispatch = useAppDispatch();

  // const [updateProduct, { isLoading }] = useUpdateProductMutation();
  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen,setDeleteModalOpen]=useState(false);

  console.log(isDeleting);

  const handleDelete = () => {
    deleteProduct({ id: _id });
    setDeleteModalOpen(false); // Close the modal after deletion
  };

  const handleUpdateClick = () => {
    console.log(product);
    setUpdateModalOpen(true);
  };

  const handleCloseUpdateModal = () => {
    setUpdateModalOpen(false);
  };

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleCancelDelete = () => {
    setDeleteModalOpen(false);
  };

  // const handleAddToCart = () => {
  //   if (stock > 0) {
  //     dispatch(addToCart({ _id, title, price, image, stock }));
  //   } else {
  //     alert("Product is out of stock");
  //   }
  // };

  const product = { _id, title, description, category, price, image, rating, stock };


  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3 border">
      <p className="font-semibold flex-1">{title}</p>
      <div className="flex-1 flex items-center gap-2">
        <p>{price}$</p>
      </div>

      <div className="flex-1">
        <img src={image} alt={title} className="h-16 w-16 object-cover" />
      </div>
      <p className="flex-[2]">{category}</p>
      <div className="space-x-5">
        <Link to={`/product/${_id}`}>
          {" "}
          <Button  className="bg-green-400">Buy</Button>
        </Link>

        <Button onClick={handleDeleteClick} className="bg-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </Button>
        <Button onClick={handleUpdateClick} className="bg-[#5C53FE]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </Button>
        {isUpdateModalOpen && (
          <UpdateProductModal
            product={product}
            onClose={handleCloseUpdateModal}
          />
        )}
         {isDeleteModalOpen && (
          <DeleteConfirmationModal
            onConfirm={handleDelete}
            onCancel={handleCancelDelete}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
