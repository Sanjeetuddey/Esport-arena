// import React from 'react'

// const Login = () => {
//   return (
//     <>

//     </>
    
//   )
// }

// export default Login;

import React, { useState } from "react";
import bgImage from "../assets/dash.webp"; // background image

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Glassmorphism Card */}
      <div className="backdrop-blur-lg bg-black/60 text-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-6 drop-shadow-lg">
          Welcome Back
        </h2>
        <p className="text-gray-300 text-center mb-8">
          Login to continue to your dashboard
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-gray-900/60 border border-gray-700 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full p-3 rounded-lg bg-gray-900/60 border border-gray-700 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-400"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button className="text-blue-400 hover:underline text-sm">
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-lg transition-all"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex border border-gray-700" />
          <span className="mx-4 text-gray-400 text-sm">OR</span>
          <div className="flex border border-gray-700" />
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button className="w-full py-2 bg-white text-black rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition">
            <span className="text-xl">🔵</span> Login with Google
          </button>
        </div>

        {/* Register Link */}
        <p className="text-center text-gray-300 mt-6">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-400 hover:underline">Register</a>
        </p>

      </div>
    </div>
  );
};

export default Login;
