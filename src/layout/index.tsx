import { FC, useContext } from "react";
import { LayoutContext } from "../context/LayoutContext";
import ModalLoader from "../components/ModalLoader";
import ModalSuccessFailed from "../components/ModalSuccessFailed";
import Header from "./Header";
import { useState } from "react";
import NewPost from "../components/NewPost";
import {BsPlus} from "react-icons/bs"
interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const { loading, message, status, user, setMessage, setStatus } =
    useContext(LayoutContext);
  const [openNewPost, setOpenNewPost] = useState<boolean>(false);
  return (
    <div className="bg-[#f0f0f0]">
      {user ? (
        <div className="min-h-screen relative">
          <Header />
          {children}
          <div onClick={() => setOpenNewPost(!openNewPost)} className="fixed right-0 bottom-0 p-2 rounded-full bg-white mr-4 mb-4 cursor-pointer shadow-xl"><BsPlus size={60} /></div>
        </div>
      ) : (
        <div className=" bg-simple-wallpaper min-h-screen px-24 flex items-center">
          {children}
        </div>
      )}
      {loading ? <ModalLoader /> : null}
      {message ? (
        <ModalSuccessFailed
          status={status}
          message={message}
          onClose={() => {
            setMessage("");
            setStatus(false);
          }}
        />
      ) : null}
      {openNewPost ? <NewPost onClose={() => setOpenNewPost(false)} /> : null}
    </div>
  );
};

export default Layout;
