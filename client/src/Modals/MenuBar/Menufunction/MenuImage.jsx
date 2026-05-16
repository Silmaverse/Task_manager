import React, { useRef } from "react";
import { FaRegImage } from "react-icons/fa6";

const MenuImage = ({ editor }) => {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    editor.chain().focus().setImage({ src: url }).run();
  };

  if (!editor) return null;


  return (
    <div>
      <button onClick={handleImageClick}>
        <FaRegImage />
      </button>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default MenuImage;
