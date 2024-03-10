import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../../redux/user/userSlice";
import { inputFields } from "./inputFields";
import { useHandleChange } from "./HandleChange";
import OAuth from "../../components/OAuth";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { formData, handleChange } = useHandleChange();
  const { loading, error } = useSelector((state: any) => state.user);

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const response = await axios.post("/api/auth/sign-in", formData);
      dispatch(signInSuccess(response.data));
      navigate("/");
    } catch (error: any) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {inputFields.map(
          (field: { placeholder: string; type: string; id: string }) => (
            <input
              key={field.id}
              {...field}
              className="bg-slate-100 p-3 rounded-lg"
              onChange={handleChange}
            />
          )
        )}
        <button
          type="submit"
          disabled={loading}
          className="bg-slate-700 opacity-[96%] text-white p-3 rounded-lg uppercase hover:bg-slate-800 hover:opacity-100 disabled:opacity-70 disabled:bg-slate-700"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Don&apos;t have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-500">Sign Up</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5 text-center font-semibold">
        {error
          ? "Error: " + error.response.data.message || "An error occurred"
          : ""}
      </p>
    </div>
  );
};

export default SignIn;

// const SignIn = () => {
//   const { formData, handleChange } = useHandleChange();
//   // const [loading, setLoading] = useState(false);
//   // const [error, setError] = useState(false);
//   const { loading, error } = useSelector((state: any) => state.user);
//   const navigate = useNavigate();

//   const handleSubmit = async (e: { preventDefault: () => void }) => {
//     const dispatch = useDispatch();
//     console.log(
//       "Initial state:",
//       useSelector((state: any) => state.user)
//     );
//     try {
//       await HandleSubmit(e, formData, navigate, dispatch);
//       console.log(
//         "State after signInStart:",
//         useSelector((state: any) => state.user)
//       );
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="p-3 max-w-lg mx-auto">
//       <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>

//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         {inputFields.map((field) => (
//           <input
//             key={field.id}
//             {...field}
//             className="bg-slate-100 p-3 rounded-lg"
//             onChange={handleChange}
//           />
//         ))}

//         <button
//           type="submit"
//           className="bg-slate-700 opacity-[96%] text-white p-3 rounded-lg uppercase hover:bg-slate-800 hover:opacity-100 disabled:opacity-70 disabled:bg-slate-700"
//           disabled={loading}
//         >
//           {loading ? "Loading..." : "Sign In"}
//         </button>
//       </form>

//       <div className="flex gap-2 mt-3">
//         <p>Don&apos;t have an account?</p>
//         <Link to="/sign-up">
//           <span className="text-blue-500">Sign Up</span>
//         </Link>
//       </div>
//       <p className="text-red-700 mt-5 text-2xl text-center font-semibold">
//         {error && "Wrong credentials"}
//       </p>
//     </div>
//   );
// };
