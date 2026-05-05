import React from "react";
import { RiUserLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { MdOutlinePassword } from "react-icons/md";
import { FaRegFile } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router";

const SignupForm = () => {
  return (
    <div>
      <div className="w-110 p-10 bg-primary rounded-2xl">
        <div className="text-center pb-7.5">
          <h1 className="font-poppins font-bold text-2xl text-textprimary">
            Create an account
          </h1>
          <p className="font-poppins font-normal text-[14px] text-[#7E7E8F] pt-1.25">
            You are welcome!
          </p>
        </div>
        <div className="">
          <form  action="/login">
            <div className="Avatar mt-5">
              <label className="font-poppins font-normal text-[14px] text-textprimary">
                Avatar
              </label>
              <div className="mt-2">
                <div className="w-full flex justify-between items-center p-3.75 border border-background rounded-lg">
                  <input
                    type="file"
                    placeholder="upload file"
                    className="outline-none font-poppins text-[14px] text-textsecondary"
                  ></input>
                  <FaRegFile className="text-xl text-textsecondary" />
                </div>
              </div>
            </div>
            <div className="name mt-5">
              <label className="name">
                <span className="font-poppins font-normal text-[14px] text-textprimary ">
                  Your name
                </span>
              </label>
              <div className="w-full flex justify-between items-center mt-2">
                <div className="w-full p-3.75 flex items-center gap-2 border border-background rounded-lg">
                  <input
                    type="text"
                    placeholder="FullName"
                    className="w-full  border-none outline-none font-poppins text-[14px] text-textsecondary"
                  />
                  <RiUserLine className="text-textsecondary text-2xl" />
                </div>
              </div>
            </div>
            <div className="email mt-5">
              <label className="font-poppins font-normal text-[14px] text-textprimary">
                E-mail
              </label>
              <div className="mt-2">
                <div className="w-full flex justify-between items-center p-3.75 border border-background rounded-lg">
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="outline-none font-poppins text-[14px] text-textsecondary"
                  ></input>
                  <MdOutlineMailOutline className="text-xl text-textsecondary" />
                </div>
              </div>
            </div>
            <div className="Password mt-5">
              <label className="font-poppins font-normal text-[14px] text-textprimary">
                Password
              </label>
              <div className="mt-2">
                <div className="w-full flex justify-between items-center p-3.75 border border-background rounded-lg">
                  <input
                    type="number"
                    placeholder="Password"
                    className="outline-none font-poppins text-[14px] text-textsecondary"
                  ></input>
                  <MdOutlinePassword className="text-xl text-textsecondary" />
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full my-5 bg-btnprimary rounded-lg py-3.5 font-poppins text-[16px] font-semibold text-primary"
            >
              {" "}
              Sign up
            </button>
          </form>
          <div className="terms flex items-center gap-2.5 w-full">
            <div className="w-5 h-5 rounded-sm  bg-background">
              <TiTick className="text-btnprimary text-xl" />
            </div>
            <p className="font-poppins font-normal text-[12px] text-[#8083A3]">
              I agree with terms & conditions
            </p>
          </div>
          <div className="sigin text-center mt-5">
            <p className="font-poppins text-sm font-normal text-textprimary">
              Already have an account?{" "}
              <Link to={"/login"} className="text-btnprimary">Sign in</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
