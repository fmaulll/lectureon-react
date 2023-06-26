import { UserTypes } from "./type";

export const formArr = [
  {
    name: "username",
    label: "Username",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    name: "role",
    label: "Role",
    type: "select",
  },
];

export const initialValue: UserTypes = {
  username: "",
  email: "",
  role: "",
  password: "",
};

export const url = "http://localhost:9000/api"