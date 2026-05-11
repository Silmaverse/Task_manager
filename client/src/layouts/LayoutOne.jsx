import React from "react";
import Navbar from "../componenets/Navbar/Navbar";
import SideNav from "../componenets/Navbar/SideNav";
import { Outlet } from "react-router";

const LayoutOne = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">

      <SideNav />
      <Outlet />
      </div>
    </div>
  );
};

export default LayoutOne;
