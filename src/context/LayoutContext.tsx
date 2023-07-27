import { createContext, FC, useEffect, useState } from "react";
import { UserLoginTypes } from "../type";
import Cookies from "js-cookie";

interface Props {
  children: React.ReactNode;
}

interface LayoutContextData {
  user: UserLoginTypes | null;
  status: boolean;
  message: string;
  loading: boolean;
  accessToken: string;
  refreshToken: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setAction: (callback: Function) => void;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
  setRefreshToken: React.Dispatch<React.SetStateAction<string>>;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

const initialValue = {
  user: null,
  status: false,
  message: "",
  loading: false,
  accessToken: "",
  refreshToken: "",
  setLoading: () => {},
  setMessage: () => {},
  setStatus: () => {},
  setAction: () => {},
  setAccessToken: () => {},
  setRefreshToken: () => {},
  setUser: () => {},
};

export const LayoutContext = createContext<LayoutContextData>(initialValue);

const { Provider } = LayoutContext;

const LayoutProvider: FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);
  const [user, setUser] = useState<UserLoginTypes | null>(null);
  const [accessToken, setAccessToken] = useState<string>("");
  const [refreshToken, setRefreshToken] = useState<string>("");

  const setAction = (callback: Function) => {
    callback();
  };

  useEffect(() => {
    const user = Cookies.get("user");
    
    if (user) {
      setUser(JSON.parse(user));
    };

    setAccessToken(Cookies.get("access_token")!)
  }, []);

  return (
    <Provider
      value={{
        user,
        loading,
        message,
        status,
        accessToken,
        refreshToken,
        setLoading,
        setMessage,
        setStatus,
        setAction,
        setAccessToken,
        setRefreshToken,
        setUser,
      }}
    >
      {children}
    </Provider>
  );
};

export default LayoutProvider;
