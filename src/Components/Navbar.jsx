import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../constants/images";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-white via-sky-200 to-sky-600 shadow-md px-6 fixed w-full h-[10vh]">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="h-20 w-44 ml-10 items-center justify-center flex"
        >
          <img className="h-14 w-32" src={logo} alt="Logo" />
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-white font-medium text-xl">
            <li>
              <Link
                to="/"
                className="hover:text-blue-600 hover:bg-gray-200 px-3 rounded-md py-1 duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="hover:text-blue-600 hover:bg-gray-200 px-3 rounded-md py-1 duration-200"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-600 hover:bg-gray-200 px-3 rounded-md py-1 duration-200"
              >
                Members
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600 hover:bg-gray-200 px-3 rounded-md py-1"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 bg-red-600 font-semibold text-white rounded hover:bg-red-900 hover:scale-95 transition"
            >
              Login / Signup
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-gray-700"></div>
              <div className="w-6 h-0.5 bg-gray-700"></div>
              <div className="w-6 h-0.5 bg-gray-700"></div>
            </div>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-gray-700 font-medium">
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/college" className="hover:text-blue-600">
                College
              </Link>
            </li>
          </ul>
          <div className="space-y-2 pt-2">
            <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100 transition">
              Sign Up
            </button>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
