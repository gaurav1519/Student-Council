import React from "react";
import { logo } from "../constants/images";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className=" h-[90vh] flex justify-center items-center">
      <form
        action="POST"
        className="w-[25%] flex flex-col gap-4 p-3 border-2 rounded-xl "
      >
        <div className="flex justify-center items-center flex-col gap-4">
          <img src={logo} alt="" className="h-24" />
          <p className="text-2xl font-semibold text-center w-full uppercase text-gray-600">
            Register
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-semibold text-gray-600">
            Role
          </label>
          <select
            name="role"
            id=""
            className="w-full py-1 border-2 border-gray-400 font-semibold rounded-md indent-2 focus:border-blue-700 outline-none"
          >
            <option value="Select Role" selected>
              Select Role
            </option>
            <option value="faculty">Faculty</option>
            <option value="CEO">CEO</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-semibold text-gray-600">
            Name
          </label>
          <input
            required
            placeholder="Enter your name"
            type="text"
            className="w-full py-1 font-semibold border-2 border-gray-400 rounded-md indent-2 focus:border-blue-700 outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-semibold text-gray-600">
            Email
          </label>
          <input
            required
            placeholder="Enter your email"
            type="email"
            className="w-full py-1 font-semibold border-2 border-gray-400 rounded-md indent-2 focus:border-blue-700 outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-semibold text-gray-600">
            Password
          </label>
          <input
            required
            placeholder="Enter Password"
            type="password"
            className="w-full py-1 font-semibold border-2 border-gray-400 rounded-md indent-2 focus:border-blue-700  outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-1 bg-blue-700 rounded-md text-white"
        >
          Register
        </button>
        <Link
          to={"/login"}
          className="w-full text-center font-semibold text-gray-600"
        >
          Don't have an account ?{" "}
          <span className="text-blue-700">Login</span>
        </Link>
      </form>
    </div>
  );
};

export default Register;
