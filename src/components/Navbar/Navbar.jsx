import React, { useState } from "react";
import logo from "../../assets/BPL/logo.png";
import { Link } from "react-router-dom";
import { HiCurrencyDollar } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="flex justify-baseline gap-2 sm:justify-between bg-base-100 shadow-sm px-3 py-2">
        <div
          className="flex items-center sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose size={25} /> : <IoMenu size={25} />}
        </div>
        <div>
          <img className="cursor-pointer" src={logo} alt="Logo" />
        </div>
        <div className="hidden sm:flex">
          <div className="flex items-center">
            <Link
              to="/"
              className="hover:bg-primary hover:text-white px-5 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/"
              className="hover:bg-primary hover:text-white px-5 py-2 rounded-md"
            >
              Fixture
            </Link>
            <Link
              to="/"
              className="hover:bg-primary hover:text-white px-5 py-2 rounded-md"
            >
              Teams
            </Link>
            <Link
              to="/"
              className="hover:bg-primary hover:text-white px-5 py-2 rounded-md"
            >
              Schedules
            </Link>
            <button className="btn btn-outline btn-primary">
              0 Coin <HiCurrencyDollar className="text-[#E88102]" size={25} />
            </button>
          </div>
        </div>
        {isOpen ? (
          <>
            <div className="absolute top-18 left-0">
              <div className="flex flex-col">
                <Link
                  to="/"
                  className="hover:bg-primary hover:text-white px-5 py-2 rounded-md"
                >
                  Home
                </Link>
                <Link
                  to="/"
                  className="hover:bg-primary hover:text-white px-5 py-2 rounded-md"
                >
                  Fixture
                </Link>
                <Link
                  to="/"
                  className="hover:bg-primary hover:text-white px-5 py-2 rounded-md"
                >
                  Teams
                </Link>
                <Link
                  to="/"
                  className="hover:bg-primary hover:text-white px-5 py-2 rounded-md"
                >
                  Schedules
                </Link>
                <button className="btn">
                  0 Coin{" "}
                  <HiCurrencyDollar className="text-[#E88102]" size={25} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navbar;
