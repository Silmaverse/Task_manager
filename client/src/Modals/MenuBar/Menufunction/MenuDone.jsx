import React from "react";
import { LuUndo } from "react-icons/lu";
import { LuRedo } from "react-icons/lu";

export const MenuDone = ({editor}) => {
  return (
    <div>
      <div className="flex gap-2 items-center">

      <button onClick={() => editor.chain().focus().undo().run()}>
        <LuUndo />
      </button>

      <button onClick={() => editor.chain().focus().redo().run()}>
        <LuRedo />
      </button>
      </div>
    </div>
  );
};
