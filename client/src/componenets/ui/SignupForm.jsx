import React, { useState } from "react";
import { RiUserLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { MdOutlinePassword } from "react-icons/md";
import { FaRegFile } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Link, useNavigate } from "react-router";
import Button from "./Button";
import Input from "./Input";
import { useAddNewUserMutation } from "../../services/api";

const SignupForm = () => {
  const [register]=useAddNewUserMutation();
  const [formdata, setformdata] = useState({
    avatar: "",
    fullname: "",
    email: "",
    password: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInpuchange = (e) => {
    setformdata((currdata) => {
      return {
        ...currdata,
        [e.target.name]:
          [e.target.name] === "avatar" ? e.target.files[0] : e.target.value,
      };
    });

    

    setallErrors((prev)=>({
      ...prev,
      [e.target.name]:"",

    }))
    
  }

  const [allerrors,setallErrors]=useState({});

  const  validateForm=()=>{
     const newerrors={}

     if(!formdata.fullname.trim())  newerrors.fullname="Fullname is required";
     if(!formdata.email)  newerrors.email="Email is required";
     if(!emailRegex.test(formdata.email))  newerrors.email="Inavlid Email";
     if(!formdata.password) newerrors.password="Password is required";
     else if(formdata.password.length<6) newerrors.password="Password length must be 6";
     if(!formdata.confirmpassword) newerrors.confirmpassword="Confirmpassword is required";
     if(formdata.password && formdata.confirmpassword){
        if(formdata.password!== formdata.confirmpassword){
          newerrors.confirmpassword="Passowrd must match"

        }
     }
     return newerrors;


  }
  const navigate=useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    const errors=validateForm();
    if(Object.keys(errors).length>0){
       setallErrors((prev)=>({
         ...prev,
         ...errors
       }))
       return
    }

    setallErrors({})
    const res=await register(formdata);
    console.log("Registered successfully",res)


    
  };

  
     

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
          <form onSubmit={handleSubmit} >
            <div className="Avatar mt-5">
              <Input
                labelName={"Avatar"}
                idname={"avatar"}
                children={"Upload a File"}
                variant={"primary"}
                types="file"
                files={"image/*"}
                names={"avatar"}
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
                error={allerrors.fullname}
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
                error={allerrors.email}
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
                error={allerrors.password}
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
                error={allerrors.confirmpassword}
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
