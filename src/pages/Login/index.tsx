import { Fragment, useContext, useState } from "react";
import { UserTypes } from "../../type";
import { formArr, initialValue, url } from "../../helper";
import axios from "axios";
import { LayoutContext } from "../../context/LayoutContext";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Jwt from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const { setLoading, setMessage, setStatus, setAction, setUser, setAccessToken } =
    useContext(LayoutContext);
  const [dataRequest, setDataRequest] = useState<UserTypes>({
    ...initialValue,
    email: "test@gmail.com",
  });

  const handleChange = (key: string, value: string) => {
    setDataRequest((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const fetchData = async (data: any) => {
    setLoading(true);
    try {
      const result = await axios.post(`${url}/login`, data);

      if (result.status === 200) {
        setMessage("Success logged in!");
        setStatus(true);
        setAction(() => {
          setTimeout(() => {
            setMessage("");
          }, 1000) 
          navigate("/home");
        });

        setAccessToken(result.data.access_token)
        Cookies.set("access_token", result.data.access_token);
        Cookies.set("refresh_token", result.data.refresh_token);

        const user = Jwt(result.data.access_token);

        setUser(user);

        Cookies.set("user", JSON.stringify(user));
      }
    } catch (error: any) {
      setMessage("Log in failed! " + String(error));
      setStatus(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!dataRequest.username || !dataRequest.password) {
      return;
    }

    const dataHit = {
      username: dataRequest.username,
      password: dataRequest.password,
    };

    fetchData(dataHit);
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[500px] bg-white p-8 rounded-lg shadow-2xl border"
      >
        <h1 className="text-2xl font-bold text-center mb-8">LOGIN</h1>
        {formArr.map((item, index) => {
          return (
            <Fragment key={index}>
              {item.name !== "role" && item.name !== "email" ? (
                <Fragment>
                  <label
                    className={`${index !== 0 && "mt-4"} font-bold text-lg`}
                    htmlFor={item.name}
                  >
                    {item.label}
                  </label>
                  <input
                    value={dataRequest[item.name as keyof typeof dataRequest]}
                    id={item.name}
                    type={item.type}
                    onChange={(e) => handleChange(item.name, e.target.value)}
                    className="border border-[#242424] rounded-lg px-4 py-2"
                  />
                </Fragment>
              ) : null}
            </Fragment>
          );
        })}
        <button className="bg-[#242424] rounded-lg p-4 text-white font-bold mt-8 hover:bg-[#303030] active:bg-[#101010] duration-200">
          Login
        </button>
        <div className="text-center mt-4">Don't have an account?</div>
        <Link
          className="text-center bg-[#242424] rounded-lg p-4 text-white font-bold mt-4 hover:bg-[#303030] active:bg-[#101010] duration-200"
          to="/signup"
        >
          Sign Up
        </Link>
      </form>
    </div>
  );
};

export default Login;
