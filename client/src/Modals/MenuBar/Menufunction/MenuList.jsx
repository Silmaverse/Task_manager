import React from 'react'
import { VscListOrdered } from "react-icons/vsc";
import { MdFormatListBulleted } from "react-icons/md";

const MenuList = ({editor}) => {
 if (!editor) return null;

  return (
    <>
    <div className="flex gap-2 items-center">

         <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          >
          <VscListOrdered />
        </button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
          <MdFormatListBulleted />
        </button>
    </div>
    </>
  )
}

export default MenuList