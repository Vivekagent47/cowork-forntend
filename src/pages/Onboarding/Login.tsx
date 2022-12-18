import React from "react";
import { Link } from "react-router-dom";
import LoginImg from "@/assets/images/Login.webp";
import { Gmail, Facebook, Twitter } from "@/assets/icons";

const Login = () => (
  <div className="flex justify-center items-start flex-col h-screen">
    <img
      className=" h-1/3 w-screen aspect-auto"
      src={LoginImg}
      alt="Login Img"
    />
    <div className="w-full flex-1 px-8 pt-10">
      <span className="text-2xl font-bold text-dark-blue">
        Welcome,
        <br /> Please Login First
      </span>
      <div className="flex justify-center items-start flex-col my-4">
        <span className="text-sm font-semibold text-dark-blue">Email</span>
        <input
          className="text-sm p-4 mt-2 bg-light-gray rounded-lg w-full placeholder-gray focus:outline-none text-dark-blue"
          type="email"
          placeholder="yourName@email.com"
        />
      </div>
      <div className="flex justify-center items-start flex-col my-4">
        <span className="text-sm font-semibold text-dark-blue">Password</span>
        <input
          className="text-sm p-4 mt-2 bg-light-gray rounded-lg w-full placeholder-gray focus:outline-none text-dark-blue"
          type="password"
          placeholder="******"
        />
      </div>
      <div className="flex justify-between items-center flex-row my-4">
        <div className="flex gap-2">
          <Gmail height="24px" width="24px" />
          <Facebook height="24px" width="24px" />
          <Twitter height="24px" width="24px" />
        </div>
        <span className="text-xs text-gray">Forget Password?</span>
      </div>
    </div>
    <div className="w-full px-8 mb-8 text-center">
      <button
        className="bg-blue text-sm text-white font-semibold rounded-lg border-none shadow-md w-full py-4 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        type="button"
        // onClick={() => onCl()}
      >
        Login
      </button>
      <div className="mt-2">
        <span className="text-xs text-gray">
          Don&apos;t Have An Account yet?
          <Link to="/signup" className="text-blue font-bold px-2">
            Register
          </Link>
        </span>
      </div>
    </div>
  </div>
);

export default Login;