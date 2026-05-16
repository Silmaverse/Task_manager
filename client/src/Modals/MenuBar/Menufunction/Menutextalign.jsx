import React, { useState } from "react";
import { CiTextAlignLeft } from "react-icons/ci";
import { CiTextAlignRight } from "react-icons/ci";
import { CiTextAlignJustify } from "react-icons/ci";
import { CiTextAlignCenter } from "react-icons/ci";

const Menutextalign = ({ editor }) => {
  const [alignOpen, setAlignOpen] = useState(false);
  if (!editor) return null;

  return (
    <div>
      <div style={{ position: "relative", display: "inline-block" }}>
        {/* Button */}
        <button onClick={() => setAlignOpen(!alignOpen)}>
          <CiTextAlignLeft />
        </button>

        {/* Dropdown */}
        {alignOpen && (
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: 0,
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "6px",
              padding: "6px",
              zIndex: 1000,
              width: "120px",
              display: "flex",
              gap: "10px",
            }}
          >
            <div
              onClick={() => {
                editor.chain().focus().setTextAlign("left").run();
                setAlignOpen(false);
              }}
            >
              <CiTextAlignLeft />
            </div>

            <div
              onClick={() => {
                editor.chain().focus().setTextAlign("center").run();
                setAlignOpen(false);
              }}
            >
              <CiTextAlignCenter />
            </div>

            <div
              onClick={() => {
                editor.chain().focus().setTextAlign("right").run();
                setAlignOpen(false);
              }}
            >
              <CiTextAlignRight />
            </div>

            <div
              onClick={() => {
                editor.chain().focus().setTextAlign("justify").run();
                setAlignOpen(false);
              }}
            >
              <CiTextAlignJustify />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menutextalign;
