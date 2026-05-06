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

  const[formdata ,setformdata]=useState({
     avatar:"",
     fullname:"",
     email:"",
     password:"",
     confirmpassword:"",
  });

  const handleInpuchange =(e)=>{
    setallerrors((prev)=>({...prev,[`${e.target.name}error`]:"border-background"}))
    
    setformdata((currdata)=>{
      return {...currdata, [e.target.name]:e.target.value}
    })

  }
  const [allerrors,setallerrors]=useState({
     fullnameerror:"border-background",
     avatarerror:"border-background",
     emailerror:"border-background",
     passworderror:"border-background",
     confirmpassworderror:"border-background",
  })
  
  const handleSubmit=(e)=>{
    if(!formdata.fullname) {setallerrors((prev)=>({...prev,fullnameerror:"border-red-400"}))}
    if(!formdata.email) {setallerrors((prev)=>({...prev,emailerror:"border-red-400"}))}
    if(!formdata.password) {setallerrors((prev)=>({...prev,passworderror:"border-red-400"}))}
    if(!formdata.confirmpassword) return setallerrors((prev)=>({...prev,confirmpassworderror:"border-red-400"}))
    e.preventDefault()
    
  }
  console.log(formdata)

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
          <form action="/login" onSubmit={handleSubmit}>
            <div className="Avatar mt-5">
              <Input
                labelName={"Avatar"}
                idname={"avatar"}
                children={"Upload a File"}
                variant={"primary"}
                types="file"
                files={"image/*"}
                names={"avatar"}
                values={formdata.avatar}
                Icon={FaRegFile}
                customstyles={allerrors.avatarerror}
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
                customstyles={allerrors.fullnameerror}
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
                types="email"
                names={"email"}
                customstyles={allerrors.emailerror}
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
                customstyles={allerrors.passworderror}
                types="password"
                names={"password"}
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
                customstyles={allerrors.confirmpassworderror}
                types="password"
                names={"confirmpassword"}
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
