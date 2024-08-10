import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { TbLetterX } from "react-icons/tb";
import Logo from '../../assets/Art.png';


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 fixed top-14 left-0 right-0 z-50 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={Logo}
              width={70}
              alt="Flowbite Logo"
            />
            <span className="self-center text-lg font-semibold text-orange-600">
              ART WOOD
            </span>
          </NavLink>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-blue-700 focus:outline-none"
            >
              {isOpen ? <TbLetterX className="h-6 w-6" /> : <IoMdMenu className="h-6 w-6" />}
            </button>
          </div>
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } md:flex flex-grow justify-center`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-gray-900 hover:text-blue-700 hover:underline-offset-8 hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#categories"
                  className={`block py-2 px-3 ${location.hash === '#categories' ? 'text-blue-700 underline underline-offset-8' : 'text-gray-900'} hover:text-blue-700 hover:underline-offset-8 hover:underline`}
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={`block py-2 px-3 ${location.hash === '#projects' ? 'text-blue-700 underline underline-offset-8' : 'text-gray-900'} hover:text-blue-700 hover:underline-offset-8 hover:underline`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`block py-2 px-3 ${location.hash === '#about' ? 'text-blue-700 underline underline-offset-8' : 'text-gray-900'} hover:text-blue-700 hover:underline-offset-8 hover:underline`}
                >
                  About
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`block py-2 px-3 ${location.hash === '#contact' ? 'text-blue-700 underline underline-offset-8' : 'text-gray-900'} hover:text-blue-700 hover:underline-offset-8 hover:underline`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

