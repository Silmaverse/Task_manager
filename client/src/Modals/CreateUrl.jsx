import React from "react";
import { IoIosLink } from "react-icons/io";
import BottomPart from "./BottomPart";


const CreateUrl = ({url}) => {
  return (
    <>
      <div className="">
        <p className="font-poppins text-center text-xl text-textprimary font-semibold">
          Share Duplicate of Creative requests
        </p>
        <div className="w-full my-10 h-1 bg-background"></div>
        <div className="link">
          <p className="text-[16px] font-poppins font-medium text-textprimary mb-3.5">
            Invite link
          </p>
          <div className="w-full p-2.75 rounded-2xl bg-background flex justify-between items-center">

          <input
            type="text"
            id="url"
            value={url}
            readOnly
            className="outline-none w-1/2 border-none text-sm font-normal font-poppins text-[#5B5C60]"
            />
            <button onClick={()=>navigator.clipboard.writeText(url)} className="font-normal text-xs font-poppins text-[#2775FF] w-18.75 h-4 flex gap-2 items-center">
                <IoIosLink />
                Copy link
            </button>
            </div>
        </div>
        <div className="invite mt-16.25">
          <label className="text-[16px] font-poppins font-medium text-textprimary mb-3.5 inline-block">
            Invite with email
          </label>
          <div className="email flex justify-between items-center">
            <input placeholder="Add project members by name or email" className="w-143 p-2.75 outline-0 border-2 border-background rounded-md"/>
            <button className="w-22.5 h-12 rounded-[5px]  bg-btnprimary text-[16px] font-poppins font-medium text-primary">Invite</button>
          </div>
        </div>
        <BottomPart/>
      </div>
    </>
  );
};

export default CreateUrl;
