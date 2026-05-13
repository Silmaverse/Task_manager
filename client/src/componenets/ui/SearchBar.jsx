import React from "react";
import { FiSearch } from "react-icons/fi";
import { CiMicrophoneOn } from "react-icons/ci";

const SearchBar = () => {
  return (
    <>
      <div className="src w-95 py-3.5 px-4 flex justify-between items-center bg-[#F5F5FA] rounded-xl">
        <div className="w-19.5 flex justify-between gap-2 items-start">
          <FiSearch className="font-poppins font-semibold text-[20px] text-textsecondary" />
          <input
            type="text"
            placeholder="Search"
            className="w-full font-poppins border-none font-semibold text-sm text-textsecondary outline-none"
          />
        </div>
        <CiMicrophoneOn className="w-5 h-5 text-textsecondary" />
      </div>
    </>
  );
};

export default SearchBar;
