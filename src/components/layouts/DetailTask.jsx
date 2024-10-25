import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const DetailTask = ({ task }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="" className="bg-blue-500 hover:bg-blue-400">
          Detail
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] sm:max-w-md rounded-md">
        <DialogHeader>
          <DialogTitle>{task?.title}</DialogTitle>
          <DialogDescription className="text-start">
            {task?.description}
          </DialogDescription>
        </DialogHeader>
        <p>Complete : {task?.isCompleted ? "Yes" : "No"}</p>
        <DialogFooter className="justify-end">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DetailTask;
