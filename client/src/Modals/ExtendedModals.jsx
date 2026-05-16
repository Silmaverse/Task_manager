import React from "react";
import Button from "../componenets/ui/Button";
import WysiwygEditor from "./WysiwygEditor";

const ExtendedModals = () => {

  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="w-full">
          <label
            htmlFor="Project"
            className="text-[16px] mb-2.5! inline-block  text-textprimary font-poppins font-medium text-center"
          >
            Project Name
          </label>
          <input
            id="Project"
            placeholder="Type name here"
            className="text-sm  font-poppins font-normal text-[#9A9AAF] w-full outline-2 outline-background rounded-lg pl-3.25 py-4"
          ></input>
          <label
            htmlFor="Project"
            className="text-[16px] mt-7.5 mb-2.5! inline-block  text-textprimary font-poppins font-medium text-center"
          >
            Description
          </label>
          <WysiwygEditor/>
          <div className="w-full">
            <Button
              variant={"secondary"}
              children={"Create"}
              customstyles={"block ml-auto text-[14px]"}
            ></Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ExtendedModals;
