import { Fragment, useEffect, useState } from "react";
import { UserTypes } from "./type";

const formArr = [
  {
    name: "username",
    label: "Username",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    type: "text",
  },
  {
    name: "password",
    label: "Password",
    type: "text",
  },
  {
    name: "role",
    label: "Role",
    type: "select",
  },
];

const initialValue: UserTypes = {
  username: "",
  email: "",
  role: "",
  password: "",
};

const App = () => {
  const [dataRequest, setDataRequest] = useState<UserTypes>(initialValue);
  const [error, setError] = useState<boolean>(false);

  const handleChange = (key: string, value: string) => {
    if (Object.values(dataRequest).includes("")) {
      setError(true);
    }
    setDataRequest((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (error) {
      return;
    }
    alert("nice");
  };

  useEffect(() => {
    setError(true);
    if (validateEmail(dataRequest.email)) {
      setError(false);
    }
  }, [dataRequest.email]);

  return (
    <div className="flex justify-center items-center h-screen bg-[#242424]">
      <form onSubmit={handleSubmit} className="flex flex-col w-[400px]">
        {error && <p>Input can't be empty!</p>}
        {formArr.map((item, index) => {
          return (
            <Fragment key={index}>
              <label className={`${index !== 0 && "mt-4"}`} htmlFor={item.name}>
                {item.label}
              </label>
              {item.type === "text" ? (
                <input
                  value={dataRequest[item.name as keyof typeof dataRequest]}
                  id={item.name}
                  type="text"
                  onChange={(e) => handleChange(item.name, e.target.value)}
                />
              ) : (
                <select
                  name={item.name}
                  id={item.name}
                  onChange={(e) => handleChange(item.name, e.target.value)}
                >
                  <option value="">Pilih Role</option>
                  <option value="LECTURER">Lecturer</option>
                  <option value="STUDENT">Student</option>
                </select>
              )}
            </Fragment>
          );
        })}
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default App;
