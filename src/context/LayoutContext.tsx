import { createContext, FC, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface LayoutContextData {
  status: boolean;
  message: string;
  loading: boolean;
  setLoading: (bool: boolean) => void;
  setMessage: (message: string) => void;
  setStatus: (bool: boolean) => void;
  setAction: (callback: Function) => void
}

const initialValue = {
  status: false,
  message: "",
  loading: false,
  setLoading: () => {},
  setMessage: () => {},
  setStatus: () => {},
  setAction: () => {}
};

export const LayoutContext = createContext<LayoutContextData>(initialValue);

const { Provider } = LayoutContext;

const LayoutProvider: FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);

  const setAction = (callback: Function) => {
    callback()
  }

//   const setLoading = (bool: boolean) => {
//     console.log(bool)
//     // setLoadingState(bool)
//   }
//   const setMessage = (string: string) => {
//     setMessageState(string)
//   }
//   const setStatus = (bool: boolean) => {
//     setStatusState(bool)
//   }

  return (
    <Provider value={{ loading, message, status, setLoading, setMessage, setStatus, setAction }}>
      {children}
    </Provider>
  );
};

export default LayoutProvider;
