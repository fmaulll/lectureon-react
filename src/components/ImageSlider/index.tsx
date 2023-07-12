import { FC, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface Props {
  images: string[];
}

const ImageSlider: FC<Props> = ({ images }) => {
  const [valueTab, setValueTab] = useState<number>(0);

  const handleNext = () => {
    if (valueTab === images.length - 1) {
      setValueTab(0);
      return;
    }
    setValueTab((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (valueTab === 0) {
      setValueTab(images.length - 1);
      return;
    }
    setValueTab((prev) => prev - 1);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[500px] h-[300px] relative py-2 px-8 bg-white">
        <img
          className="w-full h-[300px] object-contain"
          src={images[valueTab]}
          alt={images[valueTab]}
        />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center">
          <p className="text-white px-2 py-1 rounded-lg bg-darkTransparent">
            {valueTab + 1}/{images.length}
          </p>
        </div>
        <div
          className="absolute left-0 top-[130px] cursor-pointer p-2 hover:bg-darkTransparent bg-darkTransparentLight rounded-full duration-200 active:bg-darkTransparentLight"
          onClick={handlePrev}
        >
          <IoIosArrowBack color={"white"} size={40} />
        </div>
        <div
          className="absolute right-0 top-[130px] cursor-pointer p-2 hover:bg-darkTransparent bg-darkTransparentLight rounded-full duration-200 active:bg-darkTransparentLight"
          onClick={handleNext}
        >
          <IoIosArrowForward color={"white"} size={40} />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
