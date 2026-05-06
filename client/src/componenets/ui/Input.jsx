import React from "react";

const Input = ({
  variant,
  customstyles,
  files,
  names,
  idname,
  values,
  labelName,
  children,
  types,
  Icon,
  handlechange
}) => {
  const inputstyle = {
    primary: "outline-none font-poppins text-[14px] text-textsecondary",
  };

  const style = inputstyle[variant] || inputstyle.primary;

  return (
    <>
      <label
        htmlFor={idname}
        className="font-poppins font-normal text-[14px] text-textprimary"
      >
        {labelName}
      </label>
      <div className="mt-2">
        <div className={`w-full flex justify-between items-center p-3.75 border ${customstyles} rounded-lg`}>
          <input
            id={idname}
            type={types}
            name={names}
            value={values}
            accept={files}
            placeholder={children}
            className={style}
            onChange={handlechange}
          ></input>
          <Icon className="text-xl text-textsecondary" />
        </div>
      </div>
    </>
  );
};

export default Input;
