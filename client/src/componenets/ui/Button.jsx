import React from 'react'

const Button = ({children,customstyles,variant,onlcick ,types}) => {
  
    const buttonstyles={
        primary:"bg-btnprimary my-4 rounded-lg py-3.5 font-poppins text-[16px] font-semibold text-primary",
        
    }
    const style=buttonstyles[variant]|| buttonstyles.primary;

  return (
    <div>
        <button type={types} className={`${style} ${customstyles}` }>{children}</button>
    </div>
  )
}

export default Button