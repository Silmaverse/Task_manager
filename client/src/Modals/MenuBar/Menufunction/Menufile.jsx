import React, { useRef } from "react";
import { FaRegFile } from "react-icons/fa6";

const Menufile = ({ editor }) => {

const fileRef = useRef(null); // ✅ renamed

  const handleClick = () => {
    fileRef.current?.click();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    console.log("Selected file:", file);

    editor.chain().focus().insertContent(file.name).run();

    e.target.value = "";
  };

  if (!editor) return null;
  
  return (
    <div>
      <button
        onClick={handleClick}
        className=" hover:bg-gray-200 rounded"
        title="Upload file"
      >
        <FaRegFile  />
        <input
          type="file"
          ref={fileRef} // ✅ updated here
          onChange={handleFileUpload}
          style={{ display: "none" }}
        />
      </button>
    </div>
  );
};

export default Menufile;
