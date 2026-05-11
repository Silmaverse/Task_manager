import React from "react";
import ProjectCard from "../componenets/ui/ProjectCard";
import { SlCalender } from "react-icons/sl";


const Dashboard = () => {
  return (
    <>
      
        <section className="w-full  bg-[#F5F5FA]">
          <div className="container">
            <div className="header flex justify-between items-center">
              <div className="lefttxt">
                <h4 className="text-[28px] font-poppins font-semibold text-textprimary">
                  Projects manage
                </h4>
                <p className="text-sm font-poppins font-normal text-[#7E7E8F]">
                  Check out latest updates
                </p>
              </div>
              <div className="righttxt flex gap-2 items-center">
                <SlCalender  className="text-[#7E7E8F]"/>
                <p className="font-poppins text-[12px] font-normal text-[#7E7E8F]">Feb 15, 2022 - Feb 21, 2022</p>
              </div>
            </div>
            <ProjectCard />
          </div>
        </section>
      
    </>
  );
};

export default Dashboard;
