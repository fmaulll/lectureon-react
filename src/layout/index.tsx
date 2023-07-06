import { FC, useContext } from "react";
import { LayoutContext } from "../context/LayoutContext";
import ModalLoader from "../components/ModalLoader";
import ModalSuccessFailed from "../components/ModalSuccessFailed";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const { loading, message, status, user, setMessage, setStatus } =
    useContext(LayoutContext);
  return (
    <div className="bg-[#f0f0f0]">
      {user ? (
        <div className="h-screen">
          <Header />
          {children}
        </div>
      ) : (
        <div className=" bg-simple-wallpaper h-screen px-24 flex items-center">
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
    </div>
  );
};

export default Layout;
