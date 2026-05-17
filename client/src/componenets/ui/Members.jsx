import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import MembersCard from "./MembersCard";


const Members = () => {
  return (
    <>
      <div className="w-full p-4 bg-white rounded-2xl border border-background mt-8.25">
        <div className="flex justify-between items-center pb-4 border-b border-b-background">
          <p className="text-[16px] font-poppins font-semibold text-textprimary">
            All projects
          </p>
          <HiDotsVertical className="text-[#9A9AAF]" />
        </div>
        <div className="mt-7.25">
          <MembersCard/>
          <MembersCard/>
          <MembersCard/>
          <MembersCard/>
        </div>
      </div>
    </>
  );
};

export default Members;
