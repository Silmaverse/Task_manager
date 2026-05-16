import React, { useState } from "react";
import { BiHighlight } from "react-icons/bi";

const MenuHighlight = ({editor}) => {

const [highlightopen, setHighlightopen] = useState(false);

const highlightColors = [
    "#fff59d",
    "#ffcc80",
    "#ef9a9a",
    "#a5d6a7",
    "#90caf9",
    "#ce93d8",
    "#e0e0e0",
  ];
  if (!editor) return null;

  return (
    <>
      <div style={{ position: "relative", display: "inline-block" }}>
        {/* Button */}
        <button onClick={() => setHighlightopen(!highlightopen)}>
          <BiHighlight />
        </button>

        {/* Dropdown */}
        {highlightopen && (
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: 0,
              background: "#fff",
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "8px",
              width: "220px",
              zIndex: 1000,
            }}
          >
            {/* Preset colors grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: "6px",
              }}
            >
              {highlightColors.map((color) => (
                <div
                  key={color}
                  onClick={() => {
                    editor.chain().focus().setHighlight({ color }).run();
                    setHighlightopen(false);
                  }}
                  style={{
                    width: "22px",
                    height: "22px",
                    background: color,
                    borderRadius: "50%",
                    cursor: "pointer",
                    border: "1px solid #ddd",
                  }}
                />
              ))}
            </div>

            {/* Divider */}
            <button
              onClick={() => {
                (editor.chain().focus().unsetHighlight().run(),
                  setHighlightopen(false));
              }}
            >
              None
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default MenuHighlight;
