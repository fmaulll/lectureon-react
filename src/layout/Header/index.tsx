import { useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import ProfileMenu from "./ProfileMenu";
import { LayoutContext } from "../../context/LayoutContext";

const Header = () => {
  const { user } = useContext(LayoutContext);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="h-[100px] px-8 flex items-center justify-between shadow-xl">
      <h1 className="font-bold text-2xl">Lecturon</h1>
      <div className="flex justify-center items-center relative">
        <h3 className="font-bold mr-4">
          {user?.firstName} {user?.lastName}
        </h3>
        <FaUserCircle
          onClick={() => setOpen(!open)}
          className="cursor-pointer"
          size={40}
        />
        {open && <ProfileMenu onClose={() => setOpen(!open)} />}
      </div>
    </div>
  );
};

export default Header;
