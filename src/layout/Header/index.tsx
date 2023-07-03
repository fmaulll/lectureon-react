import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { LayoutContext } from "../../context/LayoutContext";

const Header = () => {
  const { user } = useContext(LayoutContext);
  return (
    <div className="h-[100px] px-8 flex items-center justify-between shadow-xl">
      <h1 className="font-bold text-2xl">Lecturon</h1>
      <div className="flex justify-center items-center">
        <FaUserCircle size={30} />
        <h3>{user?.username}</h3>
      </div>
    </div>
  );
};

export default Header;
