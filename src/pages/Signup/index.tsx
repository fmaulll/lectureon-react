import { Fragment, useState, useContext } from "react";
import { UserTypes } from "../../type";
import { useValidateForm } from "../../hooks/useValidateForm";
import { formArr, formName, initialValue, url } from "../../helper";
import { LayoutContext } from "../../context/LayoutContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const initValSignup = {
  ...initialValue,
  firstName: "",
  lastName: "",
}

const Signup = () => {
  const { setLoading, setMessage, setStatus, setAction } = useContext(LayoutContext);
  const navigate = useNavigate();
  const [dataRequest, setDataRequest] = useState<UserTypes>(initValSignup);
  const validate = useValidateForm(dataRequest);

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
      const result = await axios.post(`${url}/signup`, data);

      if (result.status === 201) {
        setMessage("Success create an account!");
        setStatus(true);
        setAction(() => {
          navigate("/");
        });
      }
    } catch (error: any) {
      setMessage("Failed to register! " + String(error.response.data.message ? error.response.data.message : error));
      setStatus(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate.length > 0) {
      return;
    }

    fetchData(dataRequest);
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[500px] bg-white p-8 rounded-lg shadow-2xl border"
      >
        <h1 className="text-2xl font-bold text-center mb-8">SIGNUP</h1>
        <div className="grid grid-cols-2 gap-4">
          {formName.map((item, index) => (
            <div key={index} className="flex flex-col">
              <label
                className={`font-bold text-lg`}
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
            </div>
          ))}
        </div>
        {formArr.map((item, index) => {
          return (
            <Fragment key={index}>
              <label
                className={`mt-4 font-bold text-lg`}
                htmlFor={item.name}
              >
                {item.label}
              </label>
              {item.type !== "select" ? (
                <input
                  value={dataRequest[item.name as keyof typeof dataRequest]}
                  id={item.name}
                  type={item.type}
                  onChange={(e) => handleChange(item.name, e.target.value)}
                  className="border border-[#242424] rounded-lg px-4 py-2"
                />
              ) : (
                <select
                  name={item.name}
                  id={item.name}
                  onChange={(e) => handleChange(item.name, e.target.value)}
                  className="border border-[#242424] rounded-lg px-4 py-2"
                >
                  <option value="">Pilih Role</option>
                  <option value="LECTURER">Lecturer</option>
                  <option value="STUDENT">Student</option>
                </select>
              )}
            </Fragment>
          );
        })}
        <div className="mt-4">
          {validate.map((item, index) => (
            <p key={index} className="text-red-500">
              {item}
            </p>
          ))}
        </div>
        <button className="bg-[#242424] rounded-lg p-4 text-white font-bold mt-4 active:bg-[#101010] duration-200">
          Sign Up
        </button>
        <div className="text-center mt-4">Already have an account?</div>
        <Link
          className="text-center bg-[#242424] rounded-lg p-4 text-white font-bold mt-4 hover:bg-[#303030] active:bg-[#101010] duration-200"
          to="/"
        >
          Login
        </Link>
      </form>
    </div>
  );
};

export default Signup;
