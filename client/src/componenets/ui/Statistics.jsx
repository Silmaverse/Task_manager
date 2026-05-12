import React from "react";
import { Bar } from "./Bar";
import { HiDotsVertical } from "react-icons/hi";

const Statistics = ({status}) => {
  return (
    <>
    <div className="w-86.75 p-3 rounded-2xl border border-background bg-[#ffffff] mt-8">

      <div className="heading flex justify-between items-center border-b border-b-background pb-3.75">
        <p className="font-poppins text-[16px] font-semibold text-textprimary">
          {status}
        </p>
        <HiDotsVertical className="text-[#9A9AAF]" />
      </div>
      <Bar/>
    </div>
    </>

  );
};

export default Statistics;
