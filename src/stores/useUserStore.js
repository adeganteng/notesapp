/* eslint-disable no-unused-vars */
import axiosInstance from "@/lib/axios";

import { toast } from "sonner";
import { create } from "zustand";

export const useUserStore = create((set, get) => ({
  user: localStorage,
  loading: false,
  signup: async (data) => {
    set({ loading: true });
    try {
      const response = await axiosInstance.post("/users/register", data);
      set({ user: response.data.user, loading: false });
      toast.success("Account created Successfully");
    } catch (error) {
      set({ loading: false });
      toast.error(error.response.data.message || "Error an occured");
    }
  },
  login: async (data) => {
    set({ loading: true });
    try {
      const response = await axiosInstance.post("/users/login", data);
      set({ user: response.data.user, loading: false });
      toast.success("Login Successful");
      localStorage.setItem("token", response.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: response.data.user.name,
          email: response.data.user.email,
        })
      );
      return response;
    } catch (error) {
      set({ loading: false });
      toast.error(error.response.data.message || "Invalid email or password");
    }
  },
  logout: () => {
    set({ user: null });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
    toast.success("Logout Successful");
  },
  getUser: localStorage.getItem("user"),
}));
