import { Link } from "react-router-dom";

import { HandleSubmit } from "./HandleSubmit";
import { useHandleChange } from "./HandleChange";
import { inputFields } from "./inputFields";

const SignUp = () => {
  const { formData, handleChange } = useHandleChange();

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>

      <form
        onSubmit={(e) => HandleSubmit(e, formData)}
        className="flex flex-col gap-4"
      >
        {inputFields.map((field) => (
          <input
            key={field.id}
            {...field}
            className="bg-slate-100 p-3 rounded-lg"
            onChange={handleChange}
          />
        ))}

        <button
          type="submit"
          className="bg-slate-700 opacity-[96%] text-white p-3 rounded-lg uppercase hover:bg-slate-800 hover:opacity-100 disabled:opacity-70 disabled:bg-slate-700"
        >
          Sign Up
        </button>
      </form>

      <div className="flex gap-2 mt-3">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
