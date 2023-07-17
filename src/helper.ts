import { UserTypes } from "./type";

export const formName = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
  },
]

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

export const url = "http://localhost:9000/api";

export const validateImage = (fileName: string) => {
  const fileExtension = fileName.split('.').pop()?.toLowerCase() || "";
  const allowed = ["jpg","jpeg", "png", "webp"]
    if(allowed?.includes(fileExtension)) {
      return true
    }
  return false
}