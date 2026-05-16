import React from "react";
import { MdOutlineFormatIndentDecrease } from "react-icons/md";
import { MdFormatIndentIncrease } from "react-icons/md";

const Menupara = ({ editor }) => {
  if (!editor) return null;

  return (
    <>
      <div className="flex gap-2 items-center">
        <button
          onClick={() => {
            const { indent = 0 } = editor.getAttributes("paragraph");
            editor
              .chain()
              .focus()
              .updateAttributes("paragraph", {
                indent: indent + 1,
              })
              .run();
          }}
        >
          <MdFormatIndentIncrease />
        </button>

        <button
          onClick={() => {
            const { indent = 0 } = editor.getAttributes("paragraph");

            editor
              .chain()
              .focus()
              .updateAttributes("paragraph", {
                indent: Math.max(indent - 1, 0),
              })
              .run();
          }}
        >
          <MdOutlineFormatIndentDecrease />
        </button>
      </div>
    </>
  );
};

export default Menupara;
