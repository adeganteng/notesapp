import { useUserStore } from "@/stores/useUserStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";
import { LogOut, Mail, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Avatar = () => {
  const { getUser, logout } = useUserStore();
  const [user, setUser] = useState(JSON.parse(getUser));
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  console.log(user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer bg-slate-600 w-10 h-10 rounded-full text-white text-xl outline-none focus:outline-none">
        {user?.name.charAt(0).toUpperCase()}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <User /> {user?.name}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Mail /> {user?.email}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleLogout}
          className="text-red-500 cursor-pointer hover:bg-red-100"
        >
          <LogOut /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Avatar;
