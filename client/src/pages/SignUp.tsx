import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your username here"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Your email here"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Your password here"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="text"
          placeholder="Here to monitor someone? Enter their key..."
          id="isAdminAccount"
          className="bg-slate-100 p-3 rounded-lg"
        />

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
