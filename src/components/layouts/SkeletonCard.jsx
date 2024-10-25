import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const SkeletonCard = () => {
  return (
    <Card className="shadow hover:scale-105 duration-300">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-6 rounded-full" />
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className={"w-[90%] h-5 rounded-full"} />
      </CardContent>
      <CardFooter className="flex justify-between items-end">
        <Skeleton className="h-5 w-10 rounded-full" />
        <div className="flex items-center gap-3">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-6 w-6 rounded-full" />
        </div>
      </CardFooter>
    </Card>
  );
};

export default SkeletonCard;
