import React, { useEffect, useRef, useState } from "react";
import OverlappingDiv from "./Overlapping";
import Sidebar from "./Sidebar";

const Header: React.FC = () => {
  const [isCategoryPopupOpen, setIsCategoryPopupOpen] = useState(false);
  const burgerIconRef = useRef<HTMLButtonElement>(null);
  const categoryPopupRef = useRef<HTMLDivElement>(null);

  const handleBurgerIconClick = () => {
    setIsCategoryPopupOpen(!isCategoryPopupOpen);
  };

  const handleCategoryPopupClick = () => {
    setIsCategoryPopupOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const sidebarElement = document.getElementById("mobile-menu-2");
    const popupElement = document.getElementById("popup");

    if (
      sidebarElement &&
      popupElement &&
      sidebarElement.contains(target) &&
      popupElement.contains(target) &&
      burgerIconRef.current?.contains(target)
    ) {
      setIsCategoryPopupOpen(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);



  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const prevScrollY = useRef(0);


 


  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  interface OverlappingDivProps {
    text: string;
    details: IDetails;
    links: ILinks;
  }

  interface ILinks {
    link1: string;
    link2: string;
  }

  interface IDetails {
    details1: string;
    details2: string;
  }

  const detailObj: IDetails = {
    details1: "Details 1",
    details2: "Details 2",
  };

  const linkObj: ILinks = {
    link1: "Link 1",
    link2: "Link 2",
  };

  return (
    <header className={`sticky top-0 transition-opacity duration-300 ${isHeaderVisible ? "opacity-100" : "opacity-0"}`}>
      <nav className="bg-indigo-50 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="./index.html" className="flex items-center">
            <span className="text-indigo-600 self-center text-xl font-semibold whitespace-nowrap">
              BeautyYou
            </span>
          </a>
          <div className="hidden lg:block">
            <ul className="flex lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 hover:text-blue-800 text-black rounded lg:bg-transparent lg:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 hover:text-blue-800 text-black rounded lg:bg-transparent lg:p-0"
                  aria-current="page"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 hover:text-blue-800 text-black rounded lg:bg-transparent lg:p-0"
                  aria-current="page"
                >
                  Procedures
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 hover:text-blue-800 text-black rounded lg:bg-transparent lg:p-0"
                  aria-current="page"
                >
                  Packages
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 hover:text-blue-800 text-black rounded lg:bg-transparent lg:p-0"
                  aria-current="page"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          

          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
            >
              Log in
            </a>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
            >
              Book Now
            </a>
            <button
              type="button"
              className="burger-icon inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={handleBurgerIconClick}
              ref={burgerIconRef}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${isCategoryPopupOpen ? "hidden" : ""}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${!isCategoryPopupOpen ? "hidden" : ""}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        
        {
          <Sidebar
            isCategoryPopupOpen={isCategoryPopupOpen}
            categoryPopupRef={categoryPopupRef}
            handleCategoryPopupClick={handleCategoryPopupClick}
          />
        }

        <div className="breakline"></div>

        {/* <div className=" category-popup">
            <div className="popup">
              <div className="listPopup">
                <ul className="listPopup ">
                  <a href="./stomachReduction.html">Stomachdd</a>
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
          </div> */}

        <div className="feature-categories">
          <div className="category underneaht flex ">
            <OverlappingDiv
              text={"Stomach"}
              details={detailObj}
              links={linkObj}
            />
            <OverlappingDiv text={"Hair"} details={detailObj} links={linkObj} />
            <OverlappingDiv text={"Face"} details={detailObj} links={linkObj} />
            <OverlappingDiv text={"Eyes"} details={detailObj} links={linkObj} />
            <OverlappingDiv
              text={"Tooths"}
              details={detailObj}
              links={linkObj}
            />
            <OverlappingDiv
              text={"About us"}
              details={detailObj}
              links={linkObj}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
