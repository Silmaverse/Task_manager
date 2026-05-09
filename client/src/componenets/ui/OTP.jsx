import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useEmailverifyMutation } from "../../services/api";
import Button from "./Button";

const OTP = ({ length = 4 }) => {
  const location = useLocation();
  const email = location.state?.email;
  const [verify] = useEmailverifyMutation();
  const navigate=useNavigate();
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef([]);

  const handlechange = (e, index) => {
    const { value } = e.target;
    if (value.match(/^\d$/) || value==="") {
      const newotp = [...otp];
      newotp[index] = value;
      setOtp(newotp);

      if (value && index < length - 1) {
        inputs.current[index + 1].focus();
      }
      
    }
    
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      // Move focus to previous input on backspace if current input is empty
      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };


  const handlesubmit=async(e)=>{
    e.preventDefault();
     const otpcode=otp.join("");
     if(otpcode.length===length){
       const res=await verify({
         email:email,
         otp:otpcode
       })
       console.log(res)


       if(res){
         navigate("/login");
       }
     }
  }

  console.log(otp);

  return (
    <div>
      <div className="text">
        <h2 className="font-poppins font-bold text-center text-2xl text-btnprimary">
          Verification Code
        </h2>
        <p className="font-poppins text-[18px] font-medium  text-[#858080] pt-1.25">
          We have sent the verification code to your email address
        </p>
          <form onSubmit={handlesubmit}>
        <div className="inputs flex justify-between items-center mt-4">

          {otp.map((_, index) => (
            <div
            key={index}
            className="w-17.75 h-17.75 border-[1.6px] rounded-[20px] flex justify-center items-center border-[#918a8a]"
            >
              <input
                key={index}
                value={otp[index]}
                onChange={(e) => handlechange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                className="w-full outline-0 px-7 font-poppins font-medium text-xl"
                />
            </div>
          ))}
        </div>
          <Button children={"Confirm"} variant={"primary"} customstyles={"w-full"} types={"submit"} ></Button>
          </form>
      </div>
    </div>
  );
};

export default OTP;
