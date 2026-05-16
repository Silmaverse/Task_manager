import React from "react";
import { HiOutlineStrikethrough } from "react-icons/hi2";

const Menutext = ({editor}) => {
if (!editor) return null;

  return (
    <div>
      <div className="flex gap-2 items-center">

      <button onClick={() => editor.chain().focus().toggleBold().run()}>
        B
      </button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()}>
        <i>i</i>
      </button>
      <button onClick={() => editor.chain().focus().toggleUnderline().run()}>
        <u>u</u>
      </button>

      <button onClick={() => editor.chain().focus().toggleStrike().run()}>
        <HiOutlineStrikethrough />
      </button>
      </div>
    </div>
  );
};

export default Menutext;
