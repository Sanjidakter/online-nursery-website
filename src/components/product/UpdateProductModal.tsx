import { FormEvent, useState, useEffect } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useUpdateProductMutation } from "@/redux/api/api";

type UpdateProductModalProps = {
  product: {
    _id: string;
    title: string;
    description: string;
    category: string;
    price: number;
    image: string;
    rating: number;
  };
  onClose: () => void;
};

const UpdateProductModal = ({ product, onClose }: UpdateProductModalProps) => {
  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price.toString());
  const [category, setCategory] = useState(product.category);
  const [image, setImage] = useState(product.image);
  const [rating, setRating] = useState(product.rating.toString());

  const [updateProduct, { isLoading, isError, isSuccess }] =
    useUpdateProductMutation();

  useEffect(() => {
    setTitle(product.title);
    setDescription(product.description);
    setPrice(product.price.toString());
    setCategory(product.category);
    setImage(product.image);
    setRating(product.rating.toString());
  }, [product]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const updatedProductDetails = {
      id: product._id,
      data: {
        title,
        description,
        category,
        price: parseFloat(price),
        image,
        rating: parseFloat(rating),
      },
    };

    updateProduct(updatedProductDetails).then(() => {
      onClose();
    });
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] text-black bg-green-600">
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
          <DialogDescription>Update the product details.</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                id="price"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                id="category"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image
              </Label>
              <Input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                id="image"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="rating" className="text-right">
                Rating
              </Label>
              <Input
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                id="rating"
                className="col-span-3"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button className="bg-green-500" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-green-500 text-white">
              {isLoading ? "Updating..." : "Update"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProductModal;
