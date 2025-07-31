import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router";
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
    <div className="navbar  bg-[#A0C878]  shadow-sm text-white sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-1 mt-3 w-52 p-2 shadow"
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
        <div className="hidden md:flex items-center gap-0.5">
          <img src="/logo.png" className="w-14 h-14" alt="TreeHub Logo" />
          <p className="text-xl font-bold">
            <span className="text-green-600">Tree</span>Hub
          </p>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <div className="divider divider-horizontal"></div>
          <li>
            <NavLink to="/explore-gardeners">Explore Gardeners</NavLink>
          </li>
          <div className="divider divider-horizontal"></div>
          <li>
            <NavLink to="/browse-tips">Browse Tips</NavLink>
          </li>
          <div className="divider divider-horizontal"></div>
          <li>
            <NavLink to="/share-tip">Share Tip</NavLink>
          </li>
          <div className="divider divider-horizontal"></div>
          <li>
            <NavLink to="/my-tips">My Tips</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end space-x-2 flex items-center">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="mr-4 text-white text-xl focus:outline-none"
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
            <div className="avatar cursor-pointer hover:scale-110 transition">
              <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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
                <p className="text-xl font-bold text-success">{user?.email}</p>
                <div className="divider divider-neutral"></div>
                <a
                  href="#_"
                  onClick={handleLogOut}
                  className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-green-600 inline-block"
                >
                  <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-success group-hover:h-full opacity-90"></span>
                  <span className="relative group-hover:text-white">LogOut</span>
                </a>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-green-600 inline-block"
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-success group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">Log In</span>
            </Link>

            <Link
              to="/register"
              className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-green-600 inline-block"
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-success group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">Register</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
