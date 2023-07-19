import { AiOutlineHome } from "react-icons/ai";
import { LuNewspaper } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/Hi";

const menu = [
  {
    name: "home",
    label: "Home",
    icon: <AiOutlineHome size={20} />,
    url: "/home"
  },
  {
    name: "post",
    label: "Post",
    icon: <LuNewspaper size={20} />,
    url: "/post"
  },
  {
    name: "lecturer",
    label: "Lecturer",
    icon: <HiOutlineUsers size={20} />,
    url: "/lecturer"
  },
];

const Sidebar = () => {
  return (
    <div className="bg-[#f0f0f0] w-[300px] shadow-2xl fixed h-screen mt-[100px]">
      {menu.map((item, index) => (
        <div key={index} className="flex items-center px-4 py-4 border">
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
