import axiosInstance from "@/lib/axios";
import { toast } from "sonner";
import { create } from "zustand";

export const useTaskStore = create((set, get) => ({
  taks: [],
  loading: false,
  loadingfetch: false,
  token: localStorage.getItem("token"),
  fetchTasks: async () => {
    set({ loadingfetch: true });

    try {
      if (!get().token) return toast.error("No token found, Plaease login");
      const res = await axiosInstance.get("/tasks", {
        headers: {
          Authorization: `Bearer ${get().token}`,
        },
      });
      set({
        tasks: res.data.tasks,
        loadingfetch: false,
      });
    } catch (error) {
      toast.error(error.message || "Failed to fetch tasks");
      set({ loadingfetch: false });
    }
  },
  addTask: async (data) => {
    set({ loading: true });
    try {
      if (!get().token) return toast.error("No token found, Plaease login");
      const res = await axiosInstance.post("/tasks", data, {
        headers: {
          Authorization: `Bearer ${get().token}`,
        },
      });
      set({
        tasks: [...get().tasks, res.data.task],
        loading: false,
      });
    } catch (error) {
      toast.error(error.message || "Failed to add task");
      set({ loading: false });
    }
  },
  editTask: async (data, id) => {
    set({ loading: true });
    try {
      if (!get().token) return toast.error("No token found, Plaease login");
      const response = await axiosInstance.patch(`/tasks/${id}`, data, {
        headers: {
          Authorization: `Bearer ${get().token}`,
        },
      });

      set({
        tasks: get().tasks.map((task) => {
          if (task._id === id) {
            return response.data.task;
          }
          return task;
        }),
        loading: false,
      });
      toast.success("Task updated successfully");
    } catch (error) {
      toast.error(error.message || "Failed to update task");
      set({ loading: false });
    }
  },
  deleteTask: async (id) => {
    set({ loading: true });
    try {
      if (!get().token) return toast.error("No token found, Plaease login");
      await axiosInstance.delete(`/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${get().token}`,
        },
      });
      set({
        tasks: get().tasks.filter((task) => task._id !== id),
        loading: false,
      });
      toast.success("Task deleted successfully");
    } catch (error) {
      toast.error(error.message || "Failed to delete task");
      set({ loading: false });
    }
  },
}));
