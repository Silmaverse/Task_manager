import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { WiTime8 } from "react-icons/wi";
import memebers from "../../assets/images/seller1.png";
import memebers2 from "../../assets/images/seller2.png";
import ProgressBar from "./ProgressBar";

const MembersCard = () => {
  return (
    <>
      <div className="w-full py-7.75 px-7.5 border border-background rounded-[10px] flex justify-between items-center mt-7">
        <div className="flex flex-col gap-1.5 items-center">
          <div className="heading">
            <p className="text-[16px] font-poppins font-semibold text-textprimary">
              OPGV Violence Interrupter Tracking Workshops
            </p>
          </div>
          <div className="flex gap-3.75 items-center">
            <p className="text-xs font-normal font-poppins text-btnprimary">
              Mitsubished
            </p>
            <div className="flex gap-2 items-center text-textsecondary">
              <CiLocationOn />
              <p className="text-xs font-poppins">New York, NY</p>
            </div>
            <div className="flex gap-2 items-center">
              <PiSuitcaseSimpleLight className="text-[#9A9AAF]" />
              <p className="text-xs font-poppins font-normal text-[#64646F]">
                Urgent
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <WiTime8 size={12} className="text-[#9A9AAF]" />
              <p className="text-xs font-normal font-poppins text-[#9A9AAF]">
                3 mins ago
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <p className="font-poppins font-normal text-[16px]">Team members</p>
          <div className="teammembersimages relative h-9 w-fit">
            <div className="images w-9 h-9 absolute z-2">
              <img src={memebers} alt="Error" />
            </div>
            <div className="w-9 h-9 absolute top-0 left-6 z-1">
              <img src={memebers2} alt="error" />
            </div>
            <div className="w-9 h-9 absolute top-0 left-12">
              <img src={memebers2} alt="error" />
            </div>
          </div>
        </div>
        <div className="progress flex flex-col items-center">
          <p className="font-poppins font-normal text-[16px] text-[#9A9AAF]">
            Progress
          </p>
          <div className="flex gap-3.5 items-center">
            <p className="text-xs font-poppins font-normal text-[#7E7E8F]">
              68%
            </p>
            <ProgressBar progress={68} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MembersCard;
