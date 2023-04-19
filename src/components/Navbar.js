import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell, faSquareCaretDown } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <>
      <nav class="bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex-shrink-0 flex items-center bg-grey w-[250px] rounded-xl">
              <input
                class="ml-4 px-3 py-2 bg-grey text-sm focus:outline-none focus:shadow-outline-gray"
                type="text"
                placeholder="Search"
              />
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <div class="ml-4 flex items-center md:ml-6">
              <div>
                <button class="bg-grey rounded-full w-10 h-10 flex items-center justify-center">
                  <FontAwesomeIcon icon={faBell} />
                </button>
              </div>
              <div class="ml-3 flex items-center">
                <button class="rounded-full w-10 h-10 flex items-center justify-center">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://i.pravatar.cc/150?img=3"
                    alt="Avatar"
                  />
                </button>
                <span class="hidden md:block ml-2 text-black text-sm font-medium mr-3">
                  John Jacob
                </span>
                <FontAwesomeIcon icon={faSquareCaretDown} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
