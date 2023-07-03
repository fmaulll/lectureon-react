import { FC, useContext } from "react";
import OutsideWrapper from "../../components/OutsideWrapper";
import { LayoutContext } from "../../context/LayoutContext";

interface Props {
  onClose: () => void;
}

const ProfileMenu: FC<Props> = ({ onClose }) => {
  const { user } = useContext(LayoutContext);

  const options = [
    {
      title: "Profile",
      subTitle: user?.username,
      href: "/",
    },
    {
      title: "Settings",
      subTitle: "",
      href: "/",
    },
    {
      title: "Log out",
      subTitle: "",
      href: "/",
    },
  ];

  return (
    <OutsideWrapper callback={onClose}>
      <div className="w-[200px] absolute top-[50px] right-0 border flex flex-col rounded-lg bg-white py-2">
        {options.map((item, index) => (
          <div
            key={index}
            className="p-4 hover:bg-[#f0f0f0] cursor-pointer duration-200 active:bg-[#e0e0e0]"
          >
            <h3 className="font-bold">{item?.title}</h3>
            <p>{item.subTitle}</p>
          </div>
        ))}
      </div>
    </OutsideWrapper>
  );
};

export default ProfileMenu;
