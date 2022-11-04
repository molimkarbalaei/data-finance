import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="justify-between items-center h-24 flex max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="text-3xl font-bold w-full text-[#0d9a]">Data.</h1>
      <ul className="flex hidden">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div>
        <AiOutlineMenu />
      </div>
    </div>
  );
};

export default Navbar;
