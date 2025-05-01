import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Home from "./Home";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="h-20 w-44 ml-10 items-center mt-5">
          <img
            className="h-14 w-32"
            src="https://cdn.prod.website-files.com/67fe6c64a51431b49c38a7bd/67fe6c64a51431b49c38abaa_WhatsApp%20Image%202024-11-28%20at%2017.46.46%20(1).jpeg"
            alt="Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-gray-700 font-medium">
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
          <div className="space-x-4">
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100 transition">
              Sign Up
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Login
            </button>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
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

      {/* Mobile Menu */}
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
      {/* <Home /> */}
    </div>
  );
};

export default Navbar;
