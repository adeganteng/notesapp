import CardTask from "@/components/layouts/CardTask";
import DialogAddTask from "@/components/layouts/DialogAddTask";
import SkeletonCard from "@/components/layouts/SkeletonCard";
import { useTaskStore } from "@/stores/useTaskStore";
import { useUserStore } from "@/stores/useUserStore";
import { Pen } from "lucide-react";
import { useEffect } from "react";
import { CgNotes, CgPen } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { getUser } = useUserStore();
  const navigate = useNavigate();
  const { tasks, fetchTasks, loadingfetch } = useTaskStore();

  useEffect(() => {
    if (!getUser) {
      navigate("/login");
    }
  }, [getUser]);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="px-3 md:px-16 min-h-[70vh] flex flex-col py-16">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-1">
          My Notes <Pen className="font-extrabold text-black" />
        </h1>
        <DialogAddTask />
      </div>

      {tasks?.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <div className="relative">
            <CgNotes className="text-[200px] text-blue-500/60" />
            <CgPen className="absolute right-0 top-0 text-[100px] text-neutral-300" />
          </div>
          <p className="text-gray-300 text-2xl font-semibold">
            Task Not Found!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {loadingfetch &&
            Array.from({ length: 3 }, (_, i) => <SkeletonCard key={i} />)}
          {tasks?.map((task, index) => (
            <CardTask key={index} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
