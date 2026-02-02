import React from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router";

const MoblieNav = ({ menuItems, logo, onClose, hideLeft, onOpen }) => {
  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <img src={logo} alt={logo} className="h-40 w-auto object-contain"></img>
      </a>
      <button className="border border-primary rounded" onClick={onOpen}>
        <HiMiniBars3BottomRight className="w-7 h-7" />
      </button>

      <div
        className={`transition-all w-full h-full fixed bg-primary z-50 top-0 ${hideLeft} flex justify-center items-center`}
      >
        <button className="absolute right-8 top-32" onClick={onClose}>
          <RiCloseLine className="w-7 h-7" />
        </button>

        <div>
          <ul className="flex flex-col gap-5">
            {menuItems?.map((menu, index) => (
              <li key={index}>
                <Link
                  to={menu}
                  className="font-medium capitalize text-secondary text-2xl"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>

          {/* login/signup btn */}
          <ul className="flex items-center gap-4 font-medium mt-10">
            <li>
              <button className="text-secondary px-4 py-2 rounded border">
                Login
              </button>
            </li>
            <li>
              <button className="text-secondary px-4 py-2 rounded border">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoblieNav;
