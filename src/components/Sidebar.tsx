import React from "react";

interface SidebarProps {
  isCategoryPopupOpen: boolean;
  categoryPopupRef: React.RefObject<HTMLDivElement>;
  handleCategoryPopupClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isCategoryPopupOpen,
  categoryPopupRef,
  handleCategoryPopupClick,
}) => {
  return (
    <div
      className={`category-popup ${isCategoryPopupOpen ? "show" : ""}`}
      id="mobile-menu-2"
      ref={categoryPopupRef}
      onClick={handleCategoryPopupClick}
    >
      <div className="flex flex-col ml-3">
        <ul>
          <a
            href="#"
            className="block py-2 pr-4 pl-3 hover:text-blue-800 text-black rounded lg:bg-transparent lg:p-0 items-center"
            aria-current="page"
          >
            <li>Home</li>
          </a>
          <a
            href="#"
            className="block py-2 pr-4 pl-3 hover:text-blue-800 text-black rounded lg:bg-transparent lg:p-0 items-center"
            aria-current="page"
          >
            <li>Stomach</li>
          </a>
          <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 hover:text-blue-800 text-black rounded lg:bg-transparent lg:p-0"
              aria-current="page"
            >
              Hair
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 hover:text-blue-800 text-black rounded lg:bg-transparent lg:p-0"
              aria-current="page"
            >
              Face
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 hover:text-blue-800 text-black rounded lg:bg-transparent lg:p-0"
              aria-current="page"
            >
              Eyes
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 hover:text-blue-800 text-black rounded lg:bg-transparent lg:p-0"
              aria-current="page"
            >
              Teeth
            </a>
          </li>

          <div className="breakline"></div>

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
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
