import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("You Logged Out successfully");
        setShowDropdown(false);
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm text-gray-800 sticky top-0 z-50">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
          {/* Logo */}
          <img src="/logo.png" className="w-14 h-14" alt="TreeHub Logo" />

          {/* Text */}
          <p className="text-xl font-bold">
            <span className="text-green-600">Tree</span>Hub
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
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
       <div className="navbar-end space-x-2">
        {user ? (
          <div className="relative">
            <div
              className="avatar cursor-pointer hover:scale-110 transition"
              onClick={() => setShowDropdown(!showDropdown)}
            >
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
                <p className="text-xl font-bold text-success">
                  {user?.email}
                </p>
                <div className="divider divider-info"></div>
                <button
                  onClick={handleLogOut}
                  className="relative px-6 py-3 font-bold text-white group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-error group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-base-200"></span>
                  <span className="relative">LogOut</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/login" className="relative px-6 py-3 font-bold text-white group">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-primary group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full border-4 border-base-200"></span>
              <span className="relative">Login</span>
            </Link>

            <Link to="/register" className="relative px-6 py-3 font-bold text-white group">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-primary group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full border-4 border-base-200"></span>
              <span className="relative">Register</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;