import React, { useState } from "react";
import ProjectCard from "../componenets/ui/ProjectCard";
import { SlCalender } from "react-icons/sl";
import Statistics from "../componenets/ui/Statistics";
import BasicModal from "../Modals/BasicModal";
import Members from "../componenets/ui/Members";

const Dashboard = () => {
  

  return (
    <>
      <section className="w-full bg-[#F5F5FA]">
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
            <div className="righttxt flex flex-col gap-2 items-center">
              <BasicModal/>
              <div className="flex gap-2">
              <SlCalender className="text-[#7E7E8F]" />
              <p className="font-poppins text-[12px] font-normal text-[#7E7E8F]">
                Feb 15, 2022 - Feb 21, 2022
              </p>
              </div>
            </div>
          </div>
          <div className="flex gap-10 flex-wrap items-start">
            <ProjectCard status={"Planning"} />
            <ProjectCard status={"Processing"} length={3} />
            <div className="flex flex-col">
              <ProjectCard status={"Completed"} length={1} />
              <div className="statistics">
                <Statistics status={"Completed"} />
              </div>
            </div>
          </div>
           <Members/>
      
          
        </div>
      </section>
    </>
  );
};

export default Dashboard;
