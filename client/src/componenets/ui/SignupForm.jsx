import React, { useState } from "react";
import { RiUserLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { MdOutlinePassword } from "react-icons/md";
import { FaRegFile } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router";
import Button from "./Button";
import Input from "./Input";

const SignupForm = () => {
  const [formdata, setformdata] = useState({
    avatar: "",
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const handleInpuchange = (e) => {
    setformdata((currdata) => {
      return {
        ...currdata,
        [e.target.name]:
          [e.target.name] == "avatar" ? e.target.files[0] : e.target.value,
      };
    });
    setallerrors((prev) => ({
      ...prev,
      [`${e.target.name}error`]: {
        color: "border-background",
        msg: "",
      },
    }));
  };
  const [allerrors, setallerrors] = useState({
    avatarerror: { color: "border-background" },
    fullnameerror: { color: "border-background", msg: "" },
    emailerror: { color: "border-background", msg: "" },
    passworderror: { color: "border-background", msg: "" },
    confirmpassworderror: { color: "border-background", msg: "" },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formdata.fullname.trim()) {
      setallerrors((prev) => ({
        ...prev,
        fullnameerror: {
          ...prev.fullnameerror,
          color: "border-red-400",
          msg: "Fullname is required",
        },
      }));
    }
    if (!formdata.email) {
      setallerrors((prev) => ({
        ...prev,
        emailerror: {
          ...prev.emailerror,
          color: "border-red-400",
          msg: "Email is required",
        },
      }));
    } else if (!emailRegex.test(formdata.email)) {
      console.log("Invalid email")
      setallerrors((prev) => ({
        ...prev,
        emailerror: {
          ...prev.emailerror,
          color: "border-red-400",
          msg: "Invalid email",
        },
      }));
    }
    if (!formdata.password) {
      setallerrors((prev) => ({
        ...prev,
        passworderror: {
          ...prev.passworderror,
          color: "border-red-400",
          msg: "Password is required",
        },
      }));
    }
    if (!formdata.confirmpassword) {
      setallerrors((prev) => ({
        ...prev,
        confirmpassworderror: {
          ...prev.confirmpassworderror,
          color: "border-red-400",
          msg: "Confirm password is required",
        },
      }));
    } else if (formdata.confirmpassword !== formdata.password) {
      setallerrors((prev) => ({
        ...prev,
        passworderror: {
          ...prev.passworderror,
          color: "border-red-400",
          msg: "Password must match",
        },
        confirmpassworderror: {
          ...prev.confirmpassworderror,
          color: "border-red-400",
          msg: "Password must match",
        },
      }));
    }
  };
  console.log(formdata);

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
          <form onSubmit={handleSubmit}>
            <div className="Avatar mt-5">
              <Input
                labelName={"Avatar"}
                idname={"avatar"}
                children={"Upload a File"}
                variant={"primary"}
                types="file"
                files={"image/*"}
                names={"avatar"}
                customstyles={allerrors.avatarerror.color}
                values={formdata.avatar}
                Icon={FaRegFile}
                handlechange={handleInpuchange}
              ></Input>
            </div>
            <div className="name mt-5">
              <Input
                labelName={"Your name"}
                idname={"fullname"}
                variant={"primary"}
                children={"FullName"}
                types="text"
                names={"fullname"}
                customstyles={allerrors.fullnameerror.color}
                error={allerrors.fullnameerror.msg}
                values={formdata.fullname}
                Icon={RiUserLine}
                handlechange={handleInpuchange}
              ></Input>
            </div>
            <div className="email mt-5">
              <Input
                labelName={"E-mail"}
                idname={"email"}
                variant={"primary"}
                children={"E-mail"}
                types="text"
                names={"email"}
                customstyles={allerrors.emailerror.color}
                error={allerrors.emailerror.msg}
                values={formdata.email}
                Icon={MdOutlineMailOutline}
                handlechange={handleInpuchange}
              ></Input>
            </div>
            <div className="Password mt-5">
              <Input
                labelName={"Password"}
                idname={"password"}
                variant={"primary"}
                children={"Password"}
                types="password"
                names={"password"}
                customstyles={allerrors.passworderror.color}
                error={allerrors.passworderror.msg}
                values={formdata.password}
                Icon={MdOutlinePassword}
                handlechange={handleInpuchange}
              ></Input>
            </div>
            <div className="Confirm_Password mt-5">
              <Input
                labelName={"Confirm Password"}
                idname={"confirmpassword"}
                variant={"primary"}
                children={"Confirm Password"}
                types="password"
                names={"confirmpassword"}
                customstyles={allerrors.confirmpassworderror.color}
                error={allerrors.confirmpassworderror.msg}
                values={formdata.confirmpassword}
                Icon={MdOutlinePassword}
                handlechange={handleInpuchange}
              ></Input>
            </div>
            <Button
              types={"submit"}
              variant={"primary"}
              customstyles={"w-full"}
              children={"Sign up"}
            ></Button>
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
              <Link to={"/login"} className="text-btnprimary">
                Sign in
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
