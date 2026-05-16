import React from "react";
import owner from "../assets/images/owner.png";
import { IoMdArrowDropdown } from "react-icons/io";

const BottomPart = () => {
  return (
    <>
      <div className="py-6 border-b-2 border-b-background flex justify-between items-center">
        <div className="owner flex gap-3 items-center">
          <div className="w-9">
            <img src={owner} alt="error" />
          </div>
          <p className="font-normal font-poppins text-sm text-[#323338]">
            Theresa Webb
          </p>
        </div>
        <p className="font-normal font-poppins text-sm text-[#7E7E8F]">Owner</p>
      </div>
      <p className="text-[16px] font-poppins font-medium text-textprimary my-4">
        Members
      </p>

 <div className="flex flex-col gap-6">
      <div className="members flex justify-between items-center">
        <div className="owner flex gap-3 items-center">
          <div className="w-10">
            <img src={owner} className="w-full" alt="error" />
          </div>
          <div className="flex flex-col ">
            <p className="font-normal font-poppins text-sm text-[#323338]">
              Theresa Webb
            </p>
            <p className="font-normal font-poppins text-xs text-[#323338]">
              binhan628@gmail.comb
            </p>
          </div>
        </div>
        <div className="w-20  flex gap-2 items-center">
          <p className="text-sm font-normal font-poppins text-[#7E7E8F]">Can edit</p>
          <IoMdArrowDropdown  size={18}/>
        </div>
      </div>
      <div className="members flex justify-between items-center">
        <div className="owner flex gap-3 items-center">
          <div className="w-10">
            <img src={owner} className="w-full" alt="error" />
          </div>
          <div className="flex flex-col ">
            <p className="font-normal font-poppins text-sm text-[#323338]">
              Theresa Webb
            </p>
            <p className="font-normal font-poppins text-xs text-[#323338]">
              binhan628@gmail.comb
            </p>
          </div>
        </div>
        <div className="w-20  flex gap-2 items-center">
          <p className="text-sm font-normal font-poppins text-[#7E7E8F]">Can edit</p>
          <IoMdArrowDropdown  size={18}/>
        </div>
      </div>

      <div className="members flex justify-between items-center">
        <div className="owner flex gap-3 items-center">
          <div className="w-10">
            <img src={owner} className="w-full" alt="error" />
          </div>
          <div className="flex flex-col ">
            <p className="font-normal font-poppins text-sm text-[#323338]">
              Theresa Webb
            </p>
            <p className="font-normal font-poppins text-xs text-[#323338]">
              binhan628@gmail.comb
            </p>
          </div>
        </div>
        <div className="w-20  flex gap-2 items-center">
          <p className="text-sm font-normal font-poppins text-[#7E7E8F]">Can edit</p>
          <IoMdArrowDropdown  size={18}/>
        </div>
      </div>
      <div className="members flex justify-between items-center">
        <div className="owner flex gap-3 items-center">
          <div className="w-10">
            <img src={owner} className="w-full" alt="error" />
          </div>
          <div className="flex flex-col ">
            <p className="font-normal font-poppins text-sm text-[#323338]">
              Theresa Webb
            </p>
            <p className="font-normal font-poppins text-xs text-[#323338]">
              binhan628@gmail.comb
            </p>
          </div>
        </div>
        <div className="w-20  flex gap-2 items-center">
          <p className="text-sm font-normal font-poppins text-[#7E7E8F]">Can edit</p>
          <IoMdArrowDropdown  size={18}/>
        </div>
      </div>
      </div>
    </>
  );
};

export default BottomPart;
