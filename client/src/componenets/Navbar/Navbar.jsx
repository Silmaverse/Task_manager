import React, { Profiler } from "react";
import SearchBar from "../ui/SearchBar";
import Browse from "../ui/Browse";
import Avatar from "../ui/Avatar";
import logo  from "../../assets/images/Logo Dark.png"

const Navbar = () => {
  return (
    <>
      <div className="w-full py-6 bg-primary flex justify-end">
        <div className="w-800 px-4  flex justify-between items-center">
          <div className="logo w-9.25 h-8.25">
         <img src={logo} className='w-full' />
       </div>
          <div className="flex gap-11.75 items-center">
            <SearchBar />
            <Browse />
          </div>
          <Avatar msg={"hello"} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
