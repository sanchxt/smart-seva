import { Link, useNavigate } from "react-router-dom";

import HandleSubmit from "./HandleSubmit";
import { useHandleChange } from "./HandleChange";
import { inputFields } from "./inputFields";
import { useState } from "react";

const SignIn = () => {
  const { formData, handleChange } = useHandleChange();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    await HandleSubmit(e, formData, setLoading, setError, navigate);
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>

      <div className="flex gap-2 mt-3">
        <p>Don&apos;t have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-500">Sign Up</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5 text-2xl text-center font-semibold">
        {error && "Wrong credentials"}
      </p>
    </div>
  );
};

export default SignIn;
