import { AiFillHome } from "react-icons/ai";

const menu = [
  {
    name: "home",
    label: "Home",
    icon: <AiFillHome size={20} />,
  },
];

const Sidebar = () => {
  return (
    <div className="bg-[#f0f0f0] w-[300px] shadow-2xl fixed h-screen mt-[100px]">
      {menu.map((item, index) => (
        <div className="flex items-center px-4 py-4 border">
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
