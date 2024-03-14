import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";

import { signOut } from "../../redux/user/userSlice";
import HeartRateChart from "./HeartRateChart";
import CaloriesChart from "./CaloriesChart";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.user);
  const [quote, setQuote] = useState("hey");
  const greeting = "Good morning";

  const handleSignOut = async () => {
    try {
      await axios.get("/api/auth/sign-out");
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex-grow text-gray-800">
      <main className="p-6 sm:p-10 space-y-6">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <div className="mr-6">
            <h1 className="text-4xl font-semibold mb-2">
              {greeting}, {currentUser.username}!
            </h1>
            <h2 className="text-gray-600 ml-0.5">{quote}</h2>
          </div>
          <div className="flex flex-wrap items-start justify-end -mb-3">
            <button
              onClick={handleSignOut}
              className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-indigo-100 focus:bg-indigo-100 border border-purple-600 rounded-md mb-3"
            >
              Logout
            </button>
          </div>
        </div>

        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
              <img src="/heart-rate.svg" alt="heart rate" />
            </div>
            <div>
              <span className="block text-2xl font-bold">89 BPM</span>
              <span className="block text-gray-500 capitalize">heart rate</span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 rounded-full mr-6">
              <img src="/blood-drop.png" alt="blood pressure" />
            </div>
            <div>
              <span className="block text-2xl font-bold">110 SYS, 76 DIA</span>
              <span className="block text-gray-500 capitalize">
                blood pressure
              </span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
              <img src="/oxygen-level.svg" alt="oxygen level" />
            </div>
            <div>
              <span className="block text-2xl font-bold">95%</span>
              <span className="block text-gray-500 capitalize">
                oxygen level
              </span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 mr-6">
              <img src="/thermometer.png" alt="thermometer temperature" />
            </div>
            <div>
              <span className="block text-2xl font-bold uppercase">
                98 &deg; f
              </span>
              <span className="block text-gray-500 capitalize">
                temperature
              </span>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
          <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
            <div className="px-6 py-5 font-semibold border-b border-gray-100">
              Recent Heart Rates
            </div>
            <div className="p-4 flex-grow">
              <HeartRateChart />
            </div>
          </div>

          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 mr-6">
              <img src="/steps.svg" alt="steps walked" />
            </div>
            <div>
              <span className="block text-2xl font-bold">7869</span>
              <span className="block text-gray-500 capitalize">Steps</span>
            </div>
          </div>

          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
              <img src="/calorie.png" alt="stress" />
            </div>
            <div>
              <span className="block text-2xl font-bold">280</span>
              <span className="block text-gray-500 capitalize">
                calories burned today
              </span>
            </div>
          </div>
          <div className="row-span-3 bg-white shadow rounded-lg">
            <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
              <span>Contacts</span>
              <button
                type="button"
                className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
              >
                USERS
                <svg
                  className="-mr-1 ml-1 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto" style={{ maxHeight: "24rem" }}>
              <ul className="p-6 space-y-6">
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      alt="Annette Watson profile picture"
                    />
                  </div>
                  <span className="text-gray-600">United States</span>
                  <span className="ml-auto font-semibold">9.3</span>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      alt="Calvin Steward profile picture"
                    />
                  </div>
                  <span className="text-gray-600">Spain</span>
                  <span className="ml-auto font-semibold">8.9</span>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      alt="Ralph Richards profile picture"
                    />
                  </div>
                  <span className="text-gray-600">United Kingdom</span>
                  <span className="ml-auto font-semibold">8.7</span>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      alt="Bernard Murphy profile picture"
                    />
                  </div>
                  <span className="text-gray-600">Malaysia</span>
                  <span className="ml-auto font-semibold">8.2</span>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      alt="Arlene Robertson profile picture"
                    />
                  </div>
                  <span className="text-gray-600">Russia</span>
                  <span className="ml-auto font-semibold">8.2</span>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      alt="Jane Lane profile picture"
                    />
                  </div>
                  <span className="text-gray-600">Canada</span>
                  <span className="ml-auto font-semibold">8.1</span>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      alt="Pat Mckinney profile picture"
                    />
                  </div>
                  <span className="text-gray-600">India</span>
                  <span className="ml-auto font-semibold">7.9</span>
                </li>
                <li className="flex items-center">
                  <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      alt="Norman Walters profile picture"
                    />
                  </div>
                  <span className="text-gray-600">Australia</span>
                  <span className="ml-auto font-semibold">7.7</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
            <div className="px-6 py-5 font-semibold border-b border-gray-100">
              <p className="capitalize">calories burned</p>
            </div>
            <div className="p-4 flex-grow">
              <CaloriesChart />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
