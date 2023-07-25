import { useNavigate } from "react-router-dom";
import { AuthRoutes } from "../../router";

const Sidebar = () => {
  const navigate = useNavigate();
  const isActive = (path: string) => {
    if (window.location.pathname.includes(path)) {
      return true;
    }
    return false;
  };

  const handleClickMenu = (path: string) => {
    localStorage.setItem("path", path)
    navigate(path);
  };

  return (
    <div className="bg-[#f0f0f0] w-[300px] shadow-2xl fixed h-screen mt-[100px]">
      {AuthRoutes.map((item, index) => {
        if (!item.sidebar) {
          return
        }
        return (
          <div
            key={index}
            onClick={() => handleClickMenu(item.path)}
            className={`${
              isActive(item.path) && "bg-gray-300"
            } flex items-center px-4 py-4 border cursor-pointer`}
          >
            <div className="mr-2">{item.icon}</div>
            <h3 className="text-lg">{item.label}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
