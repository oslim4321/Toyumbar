import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [showList, setshowList] = useState(false);
  const [showDropDown, setshowDropDown] = useState(false);
  return (
    <header>
      <nav className="flex px-4 border-b-2 border-black items-center justify-between  max-w-[80%] mx-auto fixed top-0 right-0 left-0 bg-white z-[999] flex-wrap-reverse">
        <div className="text-lg font-bold md:py-0 py-4 flex justify-between">
          <img src="/Star1.svg" alt="" />
        </div>

        <ul
          className={`md:px-2 ml-auto md:flex justify-center items-center md:space-x-2 absolute md:relative top-full left-0 right-0 bg-white py-4 transition duration-300
           transform shadow-lg md:shadow-[0]
                       ${
                         showList
                           ? "translate-y-0"
                           : "-translate-y-[1000px] md:translate-y-0"
                       }
                  `}
        >
          <li>
            <Link
              href="#"
              className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
            >
              <span>Bas Sahypa</span>
            </Link>
          </li>

          <li className="relative parent cursor-pointer">
            <span
              onClick={() => setshowDropDown((prev) => !prev)}
              className="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-50 space-x-2"
            >
              <span>Hyzmatlarymyz</span>
              <i className="bi bi-chevron-up"></i>
            </span>
            {/* dropdown */}
            <ul
              className={`child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg md:rounded-b 
                       transform
                       ${
                         showDropDown
                           ? "translate-y-0"
                           : "-translate-y-[1000px] sr-only"
                       }
                      `}
            >
              <li>
                <Link href="#" className="flex px-4 py-3 hover:bg-gray-50">
                  Web development
                </Link>
              </li>
              <li>
                <Link href="#" className="flex px-4 py-3 hover:bg-gray-50">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="#" className="flex px-4 py-3 hover:bg-gray-50">
                  Machine Learning
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="#"
              className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
            >
              <span>Biz barada</span>
            </Link>
          </li>
          {/* line */}
          {/* <div className="h-fullk bg-black w-1 h-15 mx-3"></div> */}

          {/* <li>
            <Link
              href="#"
              className="flex md:inline-flex px-5  items-center hover:bg-gray-50 border-2 border-black"
            >
              <button className="flex items-center justify-between px-4 py-2 font-medium ">
                <span className="mr-2">Biz bilen habarlas</span>
                <span className="border-b border-black mr-2"></span>
                <i className="bi bi-arrow-up-right"></i>
              </button>
            </Link>
          </li> */}
          <li>
            <Button text="Biz bilen habarlas" />
          </li>
        </ul>

        <i
          onClick={() => setshowList((prev) => !prev)}
          className="bi bi-list md:hidden text-2xl font-extrabold cursor-pointer"
        ></i>
      </nav>
    </header>
  );
};

export default Navbar;
