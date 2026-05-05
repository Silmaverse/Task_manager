import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import logo from "../../assets/images/Logo.png";
import { Link } from "react-router";
export const LoginForm = () => {
  return (
    <div>
      <div className="w-110 p-10 bg-primary rounded-2xl">
        <div className="text-center pb-7.5">
          <div className="w-full ">
            <img src={logo} alt="logonotfound" className="m-auto" />
          </div>
          <h1 className="font-poppins font-bold text-2xl text-textprimary">
            Welcome Back!
          </h1>
          <p className="font-poppins font-normal text-[14px] text-[#7E7E8F] pt-1.25">
            Let’s build something greate
          </p>
        </div>
        <div className="">
          <form >
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
              Login
            </button>
          </form>

          <div className="sigin text-center mt-5">
            <p className="font-poppins text-sm font-normal text-textprimary">
              Don’t have an account?{" "}
              <Link to="/" className="text-btnprimary">Sign up</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
