import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "@/schemas/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/stores/useUserStore";
import { useEffect } from "react";
import { Loader } from "lucide-react";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, loading, getUser } = useUserStore();

  useEffect(() => {
    if (getUser) {
      window.location.href = "/dashboard";
    }
  }, [getUser]);

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await login(data);
      if (typeof res === "undefined") {
        navigate("/login");
      }

      if (res.status === 201) {
        return navigate("/dashboard");
      }
    } catch (error) {
      return error.message;
    } finally {
      window.location.reload();
    }
  };

  return (
    <div className="py-10 md:py-20 flex  flex-col items-center justify-center">
      <Card className="w-[90%] md:w-[400px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center font-bold text-blue-500">
            Login
          </CardTitle>
          <CardDescription className="text-center text-sm font-normal">
            Welcome back, you`ve been missed!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="mail@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={loading}
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-400"
              >
                {loading ? (
                  <Loader size={24} className="animate-spin" />
                ) : (
                  "Login"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or
              </span>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600">
            Don`t have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
