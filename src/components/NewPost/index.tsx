import { useState, useEffect, useContext } from "react";
import { NewPostTypes } from "../../type";
import { FC } from "react";
import OutsideWrapper from "../OutsideWrapper";
import { BsCardImage } from "react-icons/bs";
import * as React from "react";
import { LayoutContext } from "../../context/LayoutContext";

const initialNewPost = {
  authorId: null,
  title: "",
  subTitle: "",
  description: "",
  images: [],
};
interface Props {
  onClose: () => void;
}

const NewPost: FC<Props> = ({ onClose }) => {
  const { user } = useContext(LayoutContext)
  const [dataRequest, setDataRequest] = useState<NewPostTypes>(initialNewPost);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      const images = [...dataRequest.images];
      images.push(file);
      setDataRequest((prev) => {
        return {
          ...prev,
          images,
        };
      });
    }
    e.target.files = null;
  };

  const handleChange = (key: string, value: string) => {
    setDataRequest((prev) => {
      return {
        ...prev,
        [key]: value
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("authorId", String(dataRequest.authorId))
    formData.append("title", String(dataRequest.title))
    formData.append("subTitle", String(dataRequest.subTitle))
    formData.append("description", String(dataRequest.description))
    formData.append("images", String(dataRequest.images))
    console.log(JSON.stringify(formData))
  }

  useEffect(() => {
    setDataRequest({...initialNewPost, authorId: user?.sub});
  }, []);
  return (
    <div className="h-screen bg-[rgba(0,0,0,0.6)] w-full top-0 left-0 fixed flex justify-center items-center z-30">
      <OutsideWrapper callback={onClose}>
        <div className="bg-white rounded-xl flex justify-start items-center flex-col p-8 w-[500px]">
          <form className="flex flex-col w-full justify-between h-full" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full">
              <h1 className="font-semibold text-xl mb-4">Add New Post</h1>
              <input className="border border-[#242424] rounded-lg px-4 py-2 mb-4" placeholder="Title" type="text" onChange={(e) => handleChange("title", e.target.value)} />
              <input className="border border-[#242424] rounded-lg px-4 py-2 mb-4" placeholder="Sub Title" type="text" onChange={(e) => handleChange("subTitle", e.target.value)} />
              <textarea className="border border-[#242424] rounded-lg px-4 py-2 mb-4" placeholder="Description" onChange={(e) => handleChange("description", e.target.value)}></textarea>
              <div className="grid grid-cols-3 gap-4 overflow-y-scroll mb-4">
                {dataRequest.images.map((image, index) => (
                  <div
                    key={index}
                    className="border rounded-md h-[100px] flex justify-center items-center p-2"
                  >
                    <p className="break-all text-xs">{image.name}</p>
                  </div>
                ))}
                <div className="border rounded-md h-[100px]">
                  <label
                    htmlFor="image"
                    className="cursor-pointer w-full h-full flex justify-center items-center flex-col p-2"
                  >
                    <BsCardImage size={40} />
                    <p className="text-sm">Add new image</p>
                  </label>
                  <input
                    onChange={handleChangeFile}
                    className="hidden"
                    type="file"
                    name="image"
                    id="image"
                  />
                </div>
              </div>
            </div>
            <button className="bg-[#242424] rounded-lg p-4 text-white font-bold hover:bg-[#303030] active:bg-[#101010] duration-200">Submit</button>
          </form>
        </div>
      </OutsideWrapper>
    </div>
  );
};

export default NewPost;
