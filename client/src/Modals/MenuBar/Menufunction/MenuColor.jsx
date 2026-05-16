import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ImTextColor } from "react-icons/im";

const MenuColor = ({ editor }) => {
  const colors = [
    "#000000",
    "#434343",
    "#666666",
    "#999999",
    "#b7b7b7",
    "#cccccc",
    "#efefef",
    "#ffffff",
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
  ];
  const [open, setOpen] = useState(false);

  if (!editor) return null;
  return (
    <>
      <div style={{ position: "relative", display: "inline-block" }}>
        {/* Button */}
        <button
  
          onClick={() => setOpen(!open)}
        >
          <ImTextColor/>
        </button>

        {/* Dropdown */}
        {open && (
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
              {colors.map((color) => (
                <div
                  key={color}
                  onClick={() => {
                    editor.chain().focus().setColor(color).run();
                    setOpen(false);
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
            <hr style={{ margin: "10px 0" }} />

            {/* Custom color */}
            <input
              type="color"
              onInput={(e) => {
                editor.chain().focus().setColor(e.target.value).run();
                setOpen(false);
              }}
              style={{
                width: "20%",
                height: "25px",
                border: "none",
                cursor: "pointer",
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default MenuColor;
