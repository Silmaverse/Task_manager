import React from 'react'
import { TiMessages } from "react-icons/ti";
import { IoNotificationsOutline } from "react-icons/io5";
import avatar from "../../assets/images/Avatar.png"

const Avatar = ({msg}) => {
  return (
    <>
    <div className="flex justify-between items-center w-48.5">
        <div className="relative">
          <TiMessages className="text-[#7E7E8F] text-2xl" />
          {msg && (
            <div className="msg absolute top-0 right-0 w-2 h-2 rounded-full bg-[#DD50D6]"></div>
          )}
        </div>
        <div className="relative">
          <IoNotificationsOutline className="text-[#7E7E8F] text-2xl" />
          {msg && (
            <div className="msg absolute top-0 right-0 w-2 h-2 rounded-full bg-[#DD50D6]"></div>
          )}
        </div>
        <div className="avatar w-12 h-12">
            <img src={avatar} alt="error" />
        </div>
      </div>
    </>
  )
}

export default Avatar