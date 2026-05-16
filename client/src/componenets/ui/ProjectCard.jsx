import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import seller1 from "../../assets/images/seller1.png";
import seller2 from "../../assets/images/seller2.png";
import Button from "./Button";

const ProjectCard = ({status,length=3}) => {

   const arr=Array(length).fill("")

  return (
    <>
      <div className="w-100 py-3.75 px-6 rounded-2xl bg-primary mt-11.75">
        <div className="heading flex justify-between items-center border-b border-b-background pb-3.75">
          <p className="font-poppins text-[16px] font-semibold text-textprimary">
            {status}
          </p>
          <HiDotsVertical className="text-[#9A9AAF]" />
        </div>
        {
          arr.map((_,index)=>(
        <div className="w-86.75 p-3 rounded-lg border border-background mt-8" key={index}>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div className="circle w-13.5 h-13.5 rounded-full border-[7px] border-background flex justify-center items-center">
                <p className="font-poppins font-semibold text-sm text-[#7E7E8F]">
                  28%
                </p>
              </div>

              <div className="text">
                <h4 className="font-poppins font-semibold text-sm text-textprimary">
                  Landing page design
                </h4>
                <p className="text-[10px] font-poppins font-normal text-[#9A9AAF]">
                  25 January 2022
                </p>
              </div>
            </div>
            <HiOutlineDotsHorizontal className="text-textsecondary" />
          </div>
          <div className="des border-b-2 py-2.5 border-b-textsecondary">
            <p className="text-[12px] font-poppins font-normal text-[#7E7E8F] ">
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Quisque imperdiet elit sed nisi volutpat
            </p>
          </div>
          <div className="additionalinfo flex gap-50 items-center mt-4.5">
            <div className="priority w-10.75 h-5.5 rounded-sm bg-background py-0.75 px-3">
              <p className="text-[10px] text-[#EC8C56] font-poppins font-normal">
                High
              </p>
            </div>

             <div className="sellersimg w-9 h-9 relative rounded-full">
                <div className="seller1 w-full h-full absolute z-1">
                    <img src={seller1} alt="error" />
                </div>
                <div className="seller1 w-full h-full  absolute left-6 ">
                    <img src={seller2} alt="error" className="overflow-hidden " />
                </div>

             </div>
            
          </div>
         
        </div>

          ))
        }

        <Button variant={"secondary"} children={"Add New"} customstyles={" "}></Button>
      
      </div>
    </>
  );
};

export default ProjectCard;
