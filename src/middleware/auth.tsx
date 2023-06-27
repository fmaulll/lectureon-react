import React, { FC, Fragment, useContext } from "react";
import { Navigate } from "react-router-dom";
import { LayoutContext } from "../context/LayoutContext";

interface Props {
  children: React.ReactNode;
}

export const ProtectedRoute: FC<Props> = ({ children }) => {
  const { user } = useContext(LayoutContext);
  if (!user) {
    return <Navigate to="/" />;
  }
  return <Fragment>{children}</Fragment>;
};

export const NonProtectedRoute: FC<Props> = ({ children }) => {
  const { user } = useContext(LayoutContext);
  if (user) {
    return <Navigate to="/home" />;
  }
  return <Fragment>{children}</Fragment>;
};
