import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Browse = () => {
  return (
    <>
      <div className="w-35.5 flex justify-between items-center">
        <div className="flex gap-2.75 items-center">
          <FaArrowUpRightFromSquare className="text-[#7E7E8F] text-[16px]" />
          <p className="font-poppins font-semibold text-sm">Browse</p>
        </div>
        <IoIosArrowDown className="text-[12px] text-textsecondary" />
      </div>
    </>
  );
};

export default Browse;
