import React from "react";
import Logo from "../image/samt002_samart.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-[#035dd3] shadow-md">
      <div className="flex justify-between items-center px-4 md:px-10 max-w-screen-xl mx-auto">
        <div>
          <img src={Logo} width={150} alt="Logo" className="object-contain cursor-pointer" />
        </div>
        <div>
          <ul className="flex space-x-6 md:space-x-8 list-none">
            <li className="text-white text-base md:text-lg font-semibold cursor-pointer hover:text-gray-300 transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="text-white text-base md:text-lg font-semibold cursor-pointer hover:text-gray-300 transition duration-300">
              <Link to="/services">Services</Link>
            </li>
            <li className="text-white text-base md:text-lg font-semibold cursor-pointer hover:text-gray-300 transition duration-300">
              <Link to="/e-database">E-Database</Link>
            </li>
            <li className="text-white text-base md:text-lg font-semibold cursor-pointer hover:text-gray-300 transition duration-300">
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  );
}

export default Navbar;
