import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import logo from "../../assets/images/Logo.png";
import { Link } from "react-router";
import Button from "./Button";
import Input from "./Input";
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
              <Input labelName={"E-mail"} types="email" variant={"primary"} children={"E-mail"} Icon={MdOutlineMailOutline} />
            </div>
            <div className="Password mt-5">
              <Input labelName={"Password"} types="password" variant={"primary"} children={"Password"} Icon={MdOutlinePassword} />
            </div>

            <Button types="submit" variant="primary" children="Login" customstyles={"w-full"} ></Button>
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
