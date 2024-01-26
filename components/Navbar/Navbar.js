import React from "react";
import { SearchIcon } from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between ml-8">
      <div className="flex items-center gap-x-2.5">
        <h3 className="text-xl font-semibold">Dashboard</h3>
        <SearchIcon className="h-5 w-5 pl-5 text-gray-600" />
      </div>
      <div className="flex flex-row items-center gap-x-2.5">
        <h3 className="col-span-12">Cezary Szade</h3>
        <div className="w-10 h-10 px-4">
          <img
            className="rounded-2xl h-full"
            src="rectangle-6@2x.png"
            alt="Cezary Szade"
          />
        </div>
        <span>
          <div className="bold"></div>PL / EN
        </span>

        <img
          className="h-5 w-5 text-gray-600 p-4 pr-8"
          alt=""
          src="feathericon--moon.svg"
        />
      </div>
    </div>
  );
};

export default Navbar;
