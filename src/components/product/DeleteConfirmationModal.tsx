import { Button } from "../ui/button";

type DeleteConfirmationModalProps = {
  onConfirm: () => void;
  onCancel: () => void;
};

const DeleteConfirmationModal = ({
  onConfirm,
  onCancel,
}: DeleteConfirmationModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-5 rounded-md shadow-lg">
        <p className="mb-4">Are you sure you want to delete this product?</p>
        <div className="flex justify-end space-x-3">
          <Button onClick={onCancel} className="bg-gray-400">
            Cancel
          </Button>
          <Button onClick={onConfirm} className="bg-red-500">
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
