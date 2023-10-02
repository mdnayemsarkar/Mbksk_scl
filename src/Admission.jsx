import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Admission.css"; // Import your CSS file for styling
import Header from "./Header";
import { NavLink } from "react-router-dom";

const Admission = () => {
  const [showAdmission, setShowAdmission] = useState(false);

  const toggleAdmission = () => {
    setShowAdmission(!showAdmission);
  };

  return (
    <>
      <Header />
      <div className="admission-container flex justify-center items-center">
        <button
          onClick={toggleAdmission}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mb-4"
        >
          Apply for Admission
        </button>

        <CSSTransition
          in={showAdmission}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="admission-form">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Admission Form
            </h2>
            {/* Your admission form content here */}
            <p className="text-gray-700 mb-2 text-center">
              Fill out the form below to start your journey with us.
            </p>
            {/* Add form fields and submit button */}
            <NavLink to="/formad">
              <button className="h-12 w-32 bg-fuchsia-600  text-white font-semibold rounded-lg hover:bg-blue-600 hover:text-white  py-2 px-4  transition duration-300 transform hover:scale-105">
                Apply Now
              </button>
            </NavLink>
          </div>
        </CSSTransition>
      </div>{" "}
    </>
  );
};

export default Admission;
