import React, { use, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import logo from "../../assets/images/Logo.png";
import { Link, useNavigate } from "react-router";
import Button from "./Button";
import Input from "./Input";
import { useLoginMutation } from "../../services/api";
export const LoginForm = () => {

  const [login]=useLoginMutation()

  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  const [allerrors, setallerrors] = useState({
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInputChange = (e) => {
    setallerrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
    setformdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm=()=>{

    const newerror={}
    if(!formdata.email) newerror.email="Email is required";
    else if(!emailRegex.test(formdata.email)) newerror.email="Invalid Email";
    if(!formdata.password) newerror.password="Password is required";

    return newerror;
    
  }

  const navigate=useNavigate();

  const handleSubmit =async (e) => {
    e.preventDefault();
    const errors=validateForm();
    if(Object.keys(errors).length>0){
       setallerrors((prev)=>(
        {
          ...prev,
          ...errors
        }
       ))
       return;
    }
    setallerrors({})
    const res=await login(formdata);
    if(res.error){

      const {field,message}=res.error.data;
      if(field == "email" && message=="Email is not verified") return setallerrors({email:res.error.data.message})
      if (message == "Invalid credentials") return setallerrors({password:res.error.data.message})
      
    }
    else{
      navigate("/dashboard")
      console.log("Login Success",res);
    }

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
                error={allerrors.email}
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
                error={allerrors.password}
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
