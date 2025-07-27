import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
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
        <Link className="btn" to="/login">
          Login
        </Link>
        <Link className="btn" to="/Register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
