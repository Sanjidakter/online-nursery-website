import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
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
  const [open, setOpen] = useState(false);

  const [addProduct, { isLoading, isError, isSuccess }] =
    useAddProductMutation();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const productDetails = {
      title: product,
      description,
      category,
      price,
      image,
      rating,
    };

    try {
      await addProduct(productDetails).unwrap();
      console.log("Product added successfully");
      setOpen(false); // Close the dialog after successful submission
    } catch (error) {
      console.error("Failed to add product", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-400 text-xl font-semibold" onClick={() => setOpen(true)}>
          Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-green-400 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Product</DialogTitle>
          <DialogDescription>Add Product.</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="product" className="text-right">
                Product
              </Label>
              <Input
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                id="product"
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
          <div className="flex justify-end ">
            <Button className="bg-white" type="submit">
              Save changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductModal;
