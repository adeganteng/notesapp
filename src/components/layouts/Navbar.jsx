import { CgNotes } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useUserStore } from "@/stores/useUserStore";
import Avatar from "./Avatar";
const Navbar = () => {
  const navigate = useNavigate();
  const { getUser } = useUserStore();
  const { pathname } = useLocation();
  return (
    <div className="px-3 md:px-16 py-3 md:py-5 shadow-md flex justify-between items-center">
      <Link to={"/"} className="flex items-center gap-1 text-2xl font-bold">
        <CgNotes className="text-3xl text-neutral-500" />
        <span className="text-blue-500">NotesApp</span>
      </Link>

      <div>
        {getUser && pathname === "/dashboard" ? (
          <Avatar />
        ) : getUser ? (
          <Button
            onClick={() => navigate("/dashboard")}
            className="bg-blue-500 group hover:bg-blue-400 rounded-lg duration-500 text-white font-medium"
          >
            Dashboard
          </Button>
        ) : (
          <Button
            onClick={() => navigate("/signup")}
            className="bg-blue-500 group hover:bg-blue-400 rounded-lg duration-500 text-white font-medium"
          >
            Get Started{" "}
            <FaArrowRight size={20} className="group-hover:translate-x-1" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
