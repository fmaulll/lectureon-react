import { FC } from "react";
import { BiTrash } from "react-icons/bi";

interface Props {
  image: {
    name: string;
  };
  onClickTrash: () => void;
}

const ImageAttachment: FC<Props> = ({ image, onClickTrash }) => {
  return (
    <div className="border rounded-md h-[100px] flex justify-center items-center p-2 relative">
      <p className="break-all text-xs">{image.name}</p>
      <div onClick={onClickTrash} className="absolute top-0 right-0 p-2 rounded-full hover:bg-[#f0f0f0] active:bg-[#e0e0e0] duration-200 cursor-pointer">
        <BiTrash size={30} />
      </div>
    </div>
  );
};

export default ImageAttachment;
