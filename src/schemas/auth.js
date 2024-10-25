import * as z from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email("Invalid email"),
    name: z.string().min(3, "Name minimal 3 karakter"),
    password: z.string().min(6, "Password minimal 6 karakter"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password is not the same",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

export const addTaskSchema = z.object({
  title: z.string().min(3, "Title minimal 3 karakter"),
  description: z.string().min(3, "Description minimal 3 karakter"),
  isCompleted: z.boolean(),
});
