import React, { use, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import logo from "../../assets/images/Logo.png";
import { Link } from "react-router";
import Button from "./Button";
import Input from "./Input";
export const LoginForm = () => {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  const [allerrors, setallerrors] = useState({
    emailerror: "border-background",
    passworderror: "border-background",
  });

  const handleInputChange = (e) => {
    setallerrors((prev) => ({
      ...prev,
      [`${e.target.name}error`]: "border-background",
    }));
    setformdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    if (!formdata.email)
      setallerrors((prev) => ({ ...prev, emailerror: "border-red-400" }));
    if (!formdata.password)
      setallerrors((prev) => ({ ...prev, passworderror: "border-red-400" }));
    e.preventDefault();
  };

  console.log(formdata)

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
          <form onSubmit={handleSubmit}>
            <div className="email mt-5">
              <Input
                labelName={"E-mail"}
                idname={"email"}
                customstyles={allerrors.emailerror}
                handlechange={handleInputChange}
                names={"email"}
                values={formdata.email}
                types="email"
                variant={"primary"}
                children={"E-mail"}
                Icon={MdOutlineMailOutline}
              />
            </div>
            <div className="Password mt-5">
              <Input
                labelName={"Password"}
                idname={"password"}
                customstyles={allerrors.passworderror}
                names={"password"}
                values={formdata.password}
                types="password"
                variant={"primary"}
                handlechange={handleInputChange}
                children={"Password"}
                Icon={MdOutlinePassword}
              />
            </div>

            <Button
              types="submit"
              variant="primary"
              children="Login"
              customstyles={"w-full"}
            ></Button>
          </form>

          <div className="sigin text-center mt-5">
            <p className="font-poppins text-sm font-normal text-textprimary">
              Don’t have an account?{" "}
              <Link to="/" className="text-btnprimary">
                Sign up
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
