import { AiOutlineHome } from "react-icons/ai";
import { LuNewspaper } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/Hi";
import { useNavigate } from "react-router-dom";

const menu = [
  {
    name: "home",
    label: "Home",
    icon: <AiOutlineHome size={20} />,
    path: "/home"
  },
  {
    name: "post",
    label: "Post",
    icon: <LuNewspaper size={20} />,
    path: "/post"
  },
  {
    name: "lecturer",
    label: "Lecturer",
    icon: <HiOutlineUsers size={20} />,
    path: "/lecturer"
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const isActive = (path: string) => {
    if (path === window.location.pathname) {
      return true
    }
    return false
  }

  const handleClickMenu = (path: string) => {
    navigate(path)
  }

  return (
    <div className="bg-[#f0f0f0] w-[300px] shadow-2xl fixed h-screen mt-[100px]">
      {menu.map((item, index) => (
        <div key={index} onClick={() => handleClickMenu(item.path)} className={`${isActive(item.path) && "bg-gray-300"} flex items-center px-4 py-4 border cursor-pointer`}>
          <div className="mr-2">

          {item.icon}
          </div>
          <h3 className="text-lg">{item.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
