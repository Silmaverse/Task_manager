import React from "react";
import MenuColor from "./MenuColor";
import MenuEmoji from "./MenuEmoji";
import MenuHighlight from "./MenuHighlight";
import Menutextalign from "./Menutextalign";
import { TfiParagraph } from "react-icons/tfi";

const Menufunction = ({editor}) => {
  return (
    <>
      <MenuColor editor={editor} />
      <MenuEmoji editor={editor}  />
      <button onClick={() => editor.chain().focus().setParagraph().run()}>
          <TfiParagraph />
        </button>
      <MenuHighlight editor={editor} />
      <Menutextalign editor={editor}/>
    </>
  );
};

export { Menufunction };
