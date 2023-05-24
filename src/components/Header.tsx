import React, { useEffect, useRef, useState } from "react";


  
   

const Header: React.FC = () => {
  return (
    <header>
      <nav className="bg-indigo-50 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="./index.html" className="flex items-center">
            <span className="text-indigo-600 self-center text-xl font-semibold whitespace-nowrap">BeautyYou</span>
          </a>
          <div className="flex items-center lg:order-2">
            <a href="#" className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Log in</a>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Book Now</a>
            <button type="button" className="burger-icon inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>

          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li><a href="#" className="block py-2 pr-4 pl-3 hover:text-blue-800 text-black rounded lg:bg-transparent lg:p-0" aria-current="page">Home</a></li>
              <li><a href="#" className="block py-2 pr-4 pl-3 hover:text-blue-800 text-black rounded lg:bg-transparent lg:p-0" aria-current="page">About Us</a></li>
              <li><a href="#" className="block py-2 pr-4 pl-3 hover:text-blue-800 text-black rounded lg:bg-transparent lg:p-0" aria-current="page">Procedures</a></li>
              <li><a href="#" className="block py-2 pr-4 pl-3 hover:text-blue-800 text-black rounded lg:bg-transparent lg:p-0" aria-current="page">Packages</a></li>
              <li><a href="#" className="block py-2 pr-4 pl-3 hover:text-blue-800 text-black rounded lg:bg-transparent lg:p-0" aria-current="page">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="breakline"></div>

        <div className="feature-categories">
          <div className="category-popup">
            <div className="popup">
              <div className="listPopup">
                <ul className="listPopup">
                  <a href="./stomachReduction.html">Stomach</a>
                </ul>
                <ul className="listPopup">
                  <a href="hair.html">Hair</a>
                </ul>
                <ul className="listPopup">
                  <a href="./face.html">Face</a>
                </ul>
                <ul className="listPopup">
                  <a href="./eye.html">Eyes</a>
                </ul>
                <ul className="listPopup">
                  <a href="./tooth.html">Tooths</a>
                </ul>
                <ul className="listPopup">
                  <a href="./aboutUs.html">About Us</a>
                </ul>
              </div>
            </div>
          </div>

          <div className="category">
            <h3 className="category-name">
              <a href="/stomachReduction.html">Stomach</a>
            </h3>
            <div className="category-details">
              <ul>
                <li>Details 1</li>
                <li>Detail 2</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
              </ul>
            </div>
          </div>

          <div className="category">
            <h3 className="category-name">
              <a href="/hair.html">Hair</a>
            </h3>
            <div className="category-details">
              <ul>
                <li>Details 1</li>
                <li>Detail 2</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
              </ul>
            </div>
          </div>

          <div className="category">
            <h3 className="category-name">
              <a href="/face.html">Face</a>
            </h3>
            <div className="category-details">
              <ul>
                <li>Details 1</li>
                <li>Detail 2</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
              </ul>
            </div>
          </div>

          <div className="category">
            <h3 className="category-name left">
              <a href="">Eyes</a>
            </h3>
            <div className="category-details">
              <ul>
                <li>Detail 1</li>
                <li>Detail 2</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
              </ul>
            </div>
          </div>

          <div className="category">
            <h3 className="category-name">
              <a href="/tooth.html">Tooth</a>
            </h3>
            <div className="category-details">
              <ul>
                <li>Details 1</li>
                <li>Detail 2</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
              </ul>
            </div>
          </div>

          <div className="category">
            <h3 className="category-name">
              <a href="/aboutUs.html">About Us</a>
            </h3>
            <div className="category-details">
              <ul>
                <li>Details 1</li>
                <li>Detail 2</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
                <li>Detail 3</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>

  );
};

export default Header;
