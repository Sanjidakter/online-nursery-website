import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
// import { useAppDispatch} from "@/redux/hook";
import { addProduct } from "@/redux/features/todoSlice";
import { useAddProductMutation } from "@/redux/api/api";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const AddProductModal = () => {
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");

  console.log(price);

  // !For local state management
  // const dispatch = useAppDispatch();

  // For server
  // [actualFunctionForPost,{data,isLoading,isError}]
  const [addProduct, { data, isLoading, isError, isSuccess }] =
    useAddProductMutation();

  console.log({ isLoading, isSuccess, isError, data });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // const randomString = Math.random().toString(36).substring(2, 7);

    const productDetails = {
      title: product,
      description,
      category,
      price,
      image,
      rating
    };

    console.log("inside modal", productDetails);

    addProduct(productDetails);

    console.log(productDetails);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-400 text-xl font-semibold">
          Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-green-400 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Product</DialogTitle>
          <DialogDescription>Add Product.</DialogDescription>
        </DialogHeader>
        <form  onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="product" className="text-right">
                Product
              </Label>
              <Input
                onBlur={(e) => setProduct(e.target.value)}
                id="product"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                onBlur={(e) => setPrice(e.target.value)}
                id="price"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image
              </Label>
              <Input
                onBlur={(e) => setImage(e.target.value)}
                id="image"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="rating" className="text-right">
                Rating
              </Label>
              <Input
                onBlur={(e) => setRating(e.target.value)}
                id="rating"
                className="col-span-3"
              />
            </div>
          
          </div>
          <div className="flex justify-end ">
            <DialogClose asChild>
              <Button className="bg-white" type="submit">Save changes</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductModal;
