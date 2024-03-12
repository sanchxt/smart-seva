import { Link, useNavigate } from "react-router-dom";

import HandleSubmit from "./HandleSubmit";
import { useHandleChange } from "./HandleChange";
import { inputFields } from "./inputFields";
import { useState } from "react";
import OAuth from "../../components/OAuth";

const SignUp = () => {
  const { formData, handleChange } = useHandleChange();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    await HandleSubmit(e, formData, setLoading, setError, navigate);
  };

  return (
    // <div className="p-3 max-w-lg mx-auto">
    //   <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>

    //   <form onSubmit={handleSubmit} className="flex flex-col gap-4">
    //     {inputFields.map((field) => (
    //       <input
    //         key={field.id}
    //         {...field}
    //         className="bg-slate-100 p-3 rounded-lg"
    //         onChange={handleChange}
    //       />
    //     ))}

    //     <button
    //       type="submit"
    //       className="bg-slate-700 opacity-[96%] text-white p-3 rounded-lg uppercase hover:bg-slate-800 hover:opacity-100 disabled:opacity-70 disabled:bg-slate-700"
    //       disabled={loading}
    //     >
    //       {loading ? "Loading..." : "Sign Up"}
    //     </button>
    //     <OAuth />
    //   </form>

    //   <div className="flex gap-2 mt-3">
    //     <p>Have an account?</p>
    //     <Link to="/sign-in">
    //       <span className="text-blue-500">Sign In</span>
    //     </Link>
    //   </div>
    //   <p className="text-red-700 mt-5 text-2xl text-center font-semibold">
    //     {error && "Something went wrong!"}
    //   </p>
    // </div>

    // yellow: #ffc727
    // theme-yellow: #e6b323
    // theme-dark: #37474f

    <div className="login-container container w-full lg:w-4/5 lg:bg-white h-screen lg:h-screen-75 lg:border border-gray-300 rounded-lg flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group">
      <div className="w-full lg:w-1/2 h-28 lg:h-full mt-32 lg:mt-0 lg:bg-theme-yellow-dark flex relative order-2 lg:order-1">
        <div className="text-center hidden lg:flex items-center justify-start h-full w-full select-none">
          <span className="transform block whitespace-nowrap h-full -rotate-90 text-[55px] 2xl:text-[70px] font-black uppercase text-yellow-300 opacity-0 transition-all group-hover:opacity-100 ml-10 2xl:ml-12 group-hover:-ml-20 2xl:group-hover:ml-26 lg:group-hover:ml-20 duration-1000 lg:duration-700 ease-in-out">
            K i n e c t
          </span>
        </div>

        <div className="product absolute right-0 bottom-0 flex items-center lg:justify-center w-full opacity-50 lg:opacity-100">
          <img
            src="/ambulance.png"
            alt="product"
            className="-mb-5 lg:mb-0 -ml-12 lg:ml-0 product h-[500px] xl:h-[700px] 2xl:h-[900px] w-auto object-cover transform group-hover:translate-x-26 2xl:group-hover:translate-x-48 transition-all duration-1000 lg:duration-700 ease-in-out"
          />
          <div className="shadow w-full h-5 bg-black bg-opacity-25 filter blur absolute bottom-0 lg:bottom-14 left-0 lg:left-24 rounded-full transform skew-x-10"></div>
        </div>

        <div className="hidden lg:block w-1/3 bg-white ml-auto"></div>
      </div>

      <div className="w-full lg:w-1/2 order-1 lg:order-2">
        <div className="form-wrapper flex items-center lg:h-full px-10 relative z-10 pt-16 lg:pt-0">
          <div className="w-full space-y-5">
            <div className="form-caption flex items-end justify-center text-center space-x-3 mb-20">
              <span className="text-3xl font-semibold text-gray-700">
                Sign Up
              </span>
              <span className="text-base text-gray-800">Form</span>
            </div>

            <div className="form-element">
              <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                <span className="block text-lg text-gray-800 tracking-wide">
                  Email
                </span>
                <span className="block">
                  <input
                    type="text"
                    className="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400"
                  />
                </span>
              </label>
            </div>

            <div className="form-element">
              <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                <span className="block text-lg text-gray-800 tracking-wide">
                  Password
                </span>
                <span className="block">
                  <input
                    type="password"
                    className="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400"
                  />
                </span>
              </label>
            </div>

            <div className="form-element">
              <div className="w-full lg:w-4/5 mx-auto flex items-center justify-between">
                <label className="text-gray-800 tracking-wide flex items-center space-x-2 select-none">
                  <input type="checkbox" name="" id="" />
                  <span className="block text-gray-800 tracking-wide">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-gray-800 tracking-wide inline-block border-b border-gray-300"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            <div className="form-element">
              <span className="w-full lg:w-4/5 block mx-auto ">
                <input
                  type="submit"
                  className="cursor-pointer border-2 border-yellow-200 w-full p-3 bg-yellow-200 focus:outline-none active:outline-none focus:bg-theme-yellow active:bg-theme-yellow hover:bg-theme-yellow transition-all"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
