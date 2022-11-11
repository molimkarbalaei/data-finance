import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // for functionality of the hamburger menu
  const [nav, setNav] = useState(false);

  // any time we click on the hamburger menu, we want to toggle the nav
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="justify-between items-center h-24 flex max-w-[1240px]  mx-auto px-4 text-white">
      <h1 className="text-3xl font-bold w-full text-[#0d9a]">Data.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {/* toggle between 2 icons: */}
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl font-bold w-full m-8 text-[#0d9a]">Data.</h1>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Data.</h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
