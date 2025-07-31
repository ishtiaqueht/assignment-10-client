import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router"; // fixed
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../ThemeProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("You Logged Out successfully");
        setShowDropdown(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="navbar bg-[#A0C878] shadow-md text-white sticky top-0 z-50 px-4 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-10 mt-3 w-56 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/explore-gardeners">Explore Gardeners</NavLink>
            </li>
            <li>
              <NavLink to="/browse-tips">Browse Tips</NavLink>
            </li>
            <li>
              <NavLink to="/share-tip">Share Tip</NavLink>
            </li>
            <li>
              <NavLink to="/my-tips">My Tips</NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <img src="/logo.png" className="w-14 h-14" alt="TreeHub Logo" />
          <p className="text-2xl font-bold whitespace-nowrap">
            <span className="text-green-700">Tree</span>Hub
          </p>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium gap-2">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/explore-gardeners">Explore Gardeners</NavLink>
          </li>
          <li>
            <NavLink to="/browse-tips">Browse Tips</NavLink>
          </li>
          <li>
            <NavLink to="/share-tip">Share Tip</NavLink>
          </li>
          <li>
            <NavLink to="/my-tips">My Tips</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="text-xl text-white"
          aria-label="Toggle Dark Mode"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {user ? (
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div className="avatar cursor-pointer hover:scale-105 transition">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={
                    user?.photoURL ||
                    "https://img.icons8.com/fluency/96/user-male-circle.png"
                  }
                  alt="User"
                />
              </div>
            </div>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50 p-4 text-center space-y-3.5">
                <p className="text-base font-semibold text-success">
                  {user?.email}
                </p>
                <div className="divider divider-neutral"></div>
                <button
                  onClick={handleLogOut}
                  className="w-full px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-green-600 text-sm"
                >
                  <span className="absolute inset-0 w-full h-0 transition-all duration-200 ease-out bg-success group-hover:h-full opacity-90"></span>
                  <span className="relative group-hover:text-white z-10">
                    Log Out
                  </span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="relative inline-block px-5 py-2 overflow-hidden rounded group font-medium bg-purple-50 text-green-600 whitespace-nowrap text-sm"
            >
              <span className="absolute inset-0 w-full h-0 transition-all duration-200 ease-out bg-success group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white z-10">
                Log In
              </span>
            </Link>

            <Link
              to="/register"
              className="relative inline-block px-5 py-2 overflow-hidden rounded group font-medium bg-purple-50 text-green-600 whitespace-nowrap text-sm"
            >
              <span className="absolute inset-0 w-full h-0 transition-all duration-200 ease-out bg-success group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white z-10">
                Register
              </span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
