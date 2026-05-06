import React from "react";

const OTP = () => {
  return (
    <div>
      <div className="text">
        <h2 className="font-poppins font-bold text-center text-2xl text-[#323232]">
          Verification Code
        </h2>
        <p className="font-poppins text-[18px] font-medium  text-[#B6B6B6] pt-1.25">
          We have sent the verification code to your email address
        </p>
        <form>
          <div className="inputs flex justify-between items-center mt-4">
            <div className="w-17.75 h-17.75 border-[1.6px] rounded-[20px] flex justify-center items-center border-[#DDDDDD]">
              <input
                type="text"
                maxLength={1}
                className="w-full outline-0 px-7 font-poppins font-medium text-xl"
              />
            </div>
            <div className="w-17.75 h-17.75 border-[1.6px] rounded-[20px] flex justify-center items-center border-[#DDDDDD]">
              <input
                type="text"
                maxLength={1}
                className="w-full outline-0 px-7 font-poppins font-medium text-xl"
              />
            </div>
            <div className="w-17.75 h-17.75 border-[1.6px] rounded-[20px] flex justify-center items-center border-[#DDDDDD]">
              <input
                type="text"
                maxLength={1}
                className="w-full outline-0 px-7 font-poppins font-medium text-xl"
              />
            </div>
            <div className="w-17.75 h-17.75 border-[1.6px] rounded-[20px] flex justify-center items-center border-[#DDDDDD]">
              <input
                type="text"
                maxLength={1}
                className="w-full outline-0 px-7 font-poppins font-medium text-xl"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="text-[18px]  font-poppins font-bold text-primary w-91.75 bg-btnprimary py-5 mt-5 rounded-[50px]"
            >
              Confirm{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTP;
