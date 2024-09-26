import React from "react";
import Input from '@mui/joy/Input';
function Login() {
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">SmartBook</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            Username:
          </label>
          <Input className="p-2" placeholder="Enter your username" variant="outlined" />
          {/* <input
            id="username"
            type="text"
            className="w-full p-2 border outline-none border-gray-300 rounded-lg"
            placeholder="Enter your username"
          /> */}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password:
          </label>
          <Input className="p-2"  placeholder="Enter your password" variant="outlined" />
          {/* <input
            id="password"
            type="password"
            className="w-full p-2 border outline-none border-gray-300 rounded-lg"
            placeholder="Enter your password"
          /> */}
        </div>
        <div className="flex justify-center">
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
