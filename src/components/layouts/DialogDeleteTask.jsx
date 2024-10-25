import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Delete } from "lucide-react";
import { Button } from "../ui/button";
import { useTaskStore } from "@/stores/useTaskStore";

const DialogDeleteTask = ({ task }) => {
  const { deleteTask, loading } = useTaskStore();

  const [openDialog, setOpenDialog] = useState(false);
  const handleDeleteTask = () => {
    deleteTask(task?._id);
    setOpenDialog(false);
  };
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger>
        <Delete size={24} className=" text-base text-red-500 rounded-sm" />
      </DialogTrigger>
      <DialogContent className="w-[90%] sm:max-w-[425px] rounded-md">
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            Are you want to delete {task?.title} task? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            type=""
            disabled={loading}
            onClick={handleDeleteTask}
            className="bg-red-500 hover:bg-red-400"
          >
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogDeleteTask;
