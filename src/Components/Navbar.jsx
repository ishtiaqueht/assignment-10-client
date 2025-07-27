import React, { useContext, useState } from "react"; // ✅ ঠিক
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext); // ✅ ঠিক
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
    <div className="navbar bg-base-100 shadow-sm text-gray-800 sticky top-0 z-50">
      {/* logo */}
      <div className="navbar-start hidden md:flex items-center gap-0.5">
        <img src="/logo.png" className="w-14 h-14" alt="TreeHub Logo" />
        <p className="text-xl font-bold">
          <span className="text-green-600">Tree</span>Hub
        </p>
      </div>

      {/* menu */}
      <div className="navbar-center hidden lg:flex">
        {/* ... তোমার NavLink গুলো */}
      </div>

      {/* right side */}
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
                  } // ✅ working fallback image
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
