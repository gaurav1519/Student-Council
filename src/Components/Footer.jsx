import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Intro */}
          <div>
            <h1 className="text-2xl font-bold text-blue-400 mb-4">MyLogo</h1>
            <p className="text-sm text-gray-400">
              Empowering students through events, leadership, and community.
              Join us in shaping tomorrow.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Navigation</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Events</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Services or Features */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Council</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">President</li>
              <li className="hover:text-white cursor-pointer">
                Vice President
              </li>
              <li className="hover:text-white cursor-pointer">Cultural</li>
              <li className="hover:text-white cursor-pointer">Discipline</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Connect With Us</h2>
            <div className="flex space-x-4">
              <FaFacebookF
                className="text-gray-300 hover:text-white cursor-pointer"
                size={20}
              />
              <FaInstagram
                className="text-gray-300 hover:text-white cursor-pointer"
                size={20}
              />
              <FaTwitter
                className="text-gray-300 hover:text-white cursor-pointer"
                size={20}
              />
              <FaLinkedin
                className="text-gray-300 hover:text-white cursor-pointer"
                size={20}
              />
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-400">
          © {new Date().getFullYear()} MyLogo Council. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
