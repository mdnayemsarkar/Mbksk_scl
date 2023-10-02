import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/image/kmba.jpg";

const HamburgerIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const checkScreenWidth = () => {
    if (window.innerWidth > 768) {
      setIsMobileMenuOpen(false); // Close the mobile menu for medium and large screens
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <>
      <nav className="w-screen h-24 flex justify-between items-center bg-slate-400">
        <img src={logo} alt="KMBA" className="h-24 rounded-full ml-6" />
        {window.innerWidth <= 768 && (
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-amber-400 hover:text-amber-500 ml-6 absolute top-6 right-6"
          >
            <HamburgerIcon />
          </button>
        )}
        <ul
          className={`${
            isMobileMenuOpen && window.innerWidth <= 768
              ? "flex flex-col md:flex-row"
              : "hidden md:flex"
          } gap-5 text-lg uppercase font-semibold mr-6`}
        >
          <li>
            <NavLink to="/" className="text-amber-400">
              Home
            </NavLink>
           
          </li>
          <li>
            <NavLink to="/about" className="hover:text-amber-400">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className="hover:text-amber-400">
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className="hover:text-amber-400">
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/facilities" className="hover:text-amber-400">
              Facilities
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" className="hover:text-amber-400">
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/admission" className="hover:text-amber-400">
              Admission
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
