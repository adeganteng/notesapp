import { Stars } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import DetailTask from "./DetailTask";
import DialogEditTask from "./DialogEditTask";
import DialogDeleteTask from "./DialogDeleteTask";

// eslint-disable-next-line react/prop-types
const CardTask = ({ task }) => {
  return (
    <Card className="shadow-md hover:scale-105 duration-300">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <p>{task?.title}</p>
          <Stars
            className={`${
              task?.isCompleted ? "text-yellow-500" : "text-neutral-300"
            }`}
          />
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-base text-gray-400 font-medium line-clamp-1">
          {task?.description}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-end">
        <DetailTask task={task} />
        <div className="flex items-center gap-3">
          <DialogEditTask task={task} />
          <DialogDeleteTask task={task} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardTask;
