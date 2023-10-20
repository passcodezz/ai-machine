import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900 mt-10">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex justify-between">
            <div className="mb-6 md:mb-0 items-center md:mr-10">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                AI MACHINE
              </span>

              <div className="flex items-center gap-x-4 mt-6">
                <div className="opacity-50 w-12 h-12 flex-shrink-0 bg-amber-500 cursor-pointer  rounded-full flex items-center justify-center"></div>
                <div className="opacity-50 w-12 h-12 flex-shrink-0 bg-amber-500 cursor-pointer  rounded-full flex items-center justify-center"></div>
                <div className="opacity-50 w-12 h-12 flex-shrink-0 bg-amber-500 cursor-pointer  rounded-full flex items-center justify-center"></div>
                <div className="opacity-50 w-12 h-12 flex-shrink-0 bg-amber-500 cursor-pointer  rounded-full flex items-center justify-center"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 justify-between ">
              <div className="inset-y-0 lg:right-0  items-end">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"></h2>
                <ul className="text-gray-500  dark:text-gray-400 font-medium">
                  <li className="mb-4"></li>
                  <li> </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  CONTACT
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    Address : 88/20 Moo 3, Supalak Village 2, Rangsit
                    Subdistrict, Thanyaburi District, Pathum Thani Province
                    12110
                  </li>
                  <li>02-119-7364 ,Tax 0-1355-65013-26-6</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              ©{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                AI MACHINE
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
