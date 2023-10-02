import "./App.css";
import { NavLink } from "react-router-dom";

function Firstpg() {
  return (
    <div className="fst bg-fstpg h-screen bg-cover bg-center w-screen">
      <div className="flex justify-center items-center flex-col h-2/4 pt-32">
        <h2 className="text-5xl kmba text-emerald-700 font-semibold">
          <span className="text-rose-600">কাওরাইদ মেধা বিকাশ একাডেমি এন্ড
          হাইস্কুল</span> 
        </h2>
        <p className="text-indigo-700 mt-4 text-xl ">
          The Future Belongs To Those Who See Possibilities Today
        </p>
        <div className="mt-7 flex gap-12">
          <NavLink to="/focus">
            <button className="h-12 w-32 bg-violet-600 text-white font-semibold rounded-lg hover:bg-fuchsia-600 hover:text-white    transition duration-300 transform hover:scale-105">
              Find a Course
            </button>
          </NavLink>
          <NavLink to="/formad">
          <button className="h-12 w-32 bg-fuchsia-600  text-white font-semibold rounded-lg hover:bg-blue-600 hover:text-white  py-2 px-4  transition duration-300 transform hover:scale-105">
            Apply Now
          </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Firstpg;
